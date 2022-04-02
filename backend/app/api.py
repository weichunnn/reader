from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv, find_dotenv
from readability import Readability
import os
import requests
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re
import html2text


app = FastAPI()
load_dotenv(find_dotenv())

origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "hi!"}


@app.get("/results")
async def read_root(query: str) -> dict:
    BASE_URL = "https://www.googleapis.com/customsearch/v1?key="

    URL = (
        BASE_URL
        + f"{os.getenv('API_KEY')}&cx={os.getenv('CONTEXT_KEY')}&q={query}&safe=active&"
    )

    res = requests.get(URL)

    res_json = res.json()

    items = res_json["items"]

    res_list = []
    for idx, item in enumerate(items):
        temp_dict = {
            "id": idx,
            "title": item["title"],
            "description": item["snippet"],
            "link": item["link"],
        }
        res_list.append(temp_dict)

    return res_list

    # article_text = {}

    # for url in urls:
    #     req = Request(url)
    #     html_page = urlopen(req)

    #     soup = BeautifulSoup(html_page, "html.parser")
    #     h = html2text.HTML2Text()
    #     h.ignore_links = True

    #     text = h.handle(str(soup))

    #     article_text[url] = text

    # metric_dict = {}
    # for url, text in enumerate(article_text):

    #     try:
    #         r = Readability(text)

    #         metric_dict[url] = {
    #             "flesch_kincaid": r.flesch_kincaid(),
    #             "flesch": r.flesch(),
    #             "gunning_fog": r.gunning_fog(),
    #             "coleman_liau": r.coleman_liau(),
    #             "dale_chall": r.dale_chall(),
    #             "ari": r.ari(),
    #             "linsear_write": r.linsear_write(),
    #             "smog": r.smog(),
    #             "spache": r.spache(),
    #         }
    #     except Exception:

    # return metric_dict
