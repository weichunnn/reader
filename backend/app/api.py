from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spacy
from spacy_readability import Readability
from dotenv import load_dotenv, find_dotenv
import os
import requests


app = FastAPI()
load_dotenv(find_dotenv())

origins = ["http://localhost:3000"]


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
    BASE_URL = "https://www.googleapis.com/customsearch/v1?safe=active&?key="

    URL = BASE_URL + f"{os.getenv('API_KEY')}&cx={os.getenv('CONTEXT_KEY')}&q={query}"

    print(URL)

    res = requests.get(URL)

    return res.json()


@app.get("/metrics", tags=["root"])
async def read_root(text: str) -> dict:

    r = Readability(text)

    flesch_kincaid = r.flesch_kincaid()
    flesch = r.flesch()
    gunning_fog = r.gunning_fog()
    coleman_liau = r.coleman_liau()
    dale_chall = r.dale_chall()
    ari = r.ari()
    linsear_write = r.linsear_write()
    smog = r.smog()
    spache = r.spache()

    return {
        "flesch_kincaid": flesch_kincaid,
        "flesch": flesch,
        "gunning_fog": gunning_fog,
        "coleman_liau": coleman_liau,
        "dale_chall": dale_chall,
        "ari": ari,
        "linsear_write": linsear_write,
        "smog": smog,
        "spache": spache,
    }
