# fast api
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# misc
import os
import time
from multiprocessing import Pool

# load secrets
from dotenv import load_dotenv, find_dotenv

# connect google api
from googleapiclient.discovery import build

# extract text from websites
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import html2text

# calculate readibiltiy emtrics
from readability import Readability

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "hi!"}


@app.get("/results")
async def read_root(query: str) -> dict:

    load_dotenv(find_dotenv())
    service = build("customsearch", "v1", developerKey=os.getenv("GOOGLE_API_KEY"))

    CX_KEY = os.getenv("CONTEXT_KEY")

    # first call to api to get 10 results
    res = google_search(service, query, CX_KEY)

    # recursive calls to get 90 more results (capped at 100 results)
    res = google_next_page(service, query, CX_KEY, res, 2, res["items"])

    urls = [item["link"] for item in res]

    tic = time.perf_counter()

    pool = Pool(os.cpu_count())
    text_metric = pool.map(extract_text_metrics, urls)

    pool.close()

    res_list = []
    for idx, item in enumerate(res):
        if text_metric[idx] is None:
            continue

        temp_dict = {
            "id": idx,
            "title": item["title"],
            "description": item["snippet"],
            "link": item["link"],
            "text": text_metric[idx][0],
            "metrics": text_metric[idx][1],
        }
        res_list.append(temp_dict)

    toc = time.perf_counter()
    print(f"Finished computing metrics for {res_list} articles in {toc - tic:0.4f} seconds")
    return res_list


def extract_text_metrics(url):
    hdr = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
        "Accept-Encoding": "none",
        "Accept-Language": "en-US,en;q=0.8",
        "Connection": "keep-alive",
    }
    try:
        req = Request(url, headers=hdr)
        html_page = urlopen(req)

        soup = BeautifulSoup(html_page, "html.parser")
        h = html2text.HTML2Text()
        h.ignore_links = True
        h.ignore_images = True

        text = h.handle(str(soup))

        r = Readability(text)
        fk = r.flesch_kincaid()
        f = r.flesch()
        dc = r.dale_chall()
        ari = r.ari()
        cl = r.coleman_liau()
        gf = r.gunning_fog()
        # s = r.smog(all_sentences=True)
        # sp = r.spache()
        # lw = r.linsear_write()
    except Exception as e:
        print(e)
        return None

    metrics = {
        "Flesch-Kincaid score": fk.score,
        "Flesch-Kincaid grade level": fk.grade_level,
        "Flesch score": f.score,
        "Flesch score": f.ease,
        "Flesch grade level": f.grade_levels,
        "Dale-Chall score": dc.score,
        "Dale-Chall grade level": dc.grade_levels,
        "ARI score": ari.score,
        "ARI grade level": ari.grade_levels,
        "ARI age": ari.ages,
        "Coleman-Liau score": cl.score,
        "Coleman-Liau grade level": cl.grade_level,
        "Gunning fog score": gf.score,
        "Gunning fog grade level": gf.grade_level,
        # "SMOG score": s.score,
        # "SMOG grade level": s.grade_level,
        # "Spache score": sp.score,
        # "Spache grade level": sp.grade_level,
        # "Linsear Write score": lw.score,
        # "Linsear Write grade level": lw.grade_level,
    }

    return (text, metrics)


def google_search(service, query, cse_id):
    res = service.cse().list(q=query, cx=cse_id).execute()
    return res


def google_next_page(service, query, cse_id, res, page, url_items):
    next_res = (
        service.cse()
        .list(
            q=query,
            cx=cse_id,
            num=10,
            start=res["queries"]["nextPage"][0]["startIndex"],
        )
        .execute()
    )
    for item in next_res["items"]:
        url_items.append(item)
    page += 1

    if page == 10:
        return url_items

    return google_next_page(service, query, cse_id, next_res, page, url_items)
