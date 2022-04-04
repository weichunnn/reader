# Readabl

## Inspiration
Elementary school kids are very savvy with searching via Google, and while sometimes the content returned are relevant, they may not be at a suitable reading level when the first search results talks about something like phytochemicals or pharmacology. Is there a way to assess whether links in a search result are at the level users desire to read?

That's why we created Readabl.

Readability is about the reader, and different personas will have their own perspective on how readability metrics can help them. Our vision is to enable users to find content suitable for their needs and help make content accessible to everyone.

## What it does
Readabl offers search results along with readability metrics so that users can at a glance see what search results are suitable for them to read.

## How we built it
The entire application is hosted in a monorepo consisting of a Javascript frontend framework - Svelte with a FastAPI backend endpoint. The frontend is hosted on Netlify while the backend is hosted using GCP's Cloud Run. The search and processing that takes place in the backend is built using both Google Cloud Custom Search JSON API and the py-readability-metrics library.

### Backend
Hosted on GCP's Cloud Run using Docker, we are using FastAPI to communicate with our frontend to get user's search term and rank the information according back to the users. The FastAPI talks to Google Search API, retrieving information and passing it along. Before passing to the frontend, we parsed the information using a Python Library - BeautifulSoup - to get the text on the particular page to be ranked for readability. We also explored concurrent programming via Python in the backend so that we can parse multiple webpages in parallel to speed up the processing.

backend -> https://api.readabl.tech/

### Frontend
The frontend uses the Svelte framework as the main driver due to it's fast run time and minimalistic structure with little boilerplates code. We explored using a UI framework to speed up the development workflow but a lot of the existing UI frameworks suits the projects due to limited functionality and poor documentation.

frontend -> https://readto.beabetterhuman.tech/

## Challenges we ran into
We explored multiple new technologies during this hackathon. Since we are all new to the technology we used, we faced a lot of steep learning curve and issue revolving around navigating GCP:

- back end processing takes a lot longer and times out the search results when there is too much to parse because of the content submitted (e.g. philosophical questions). We are also limited by Google API to be able to request only 10 links per search hence we needed to do this recursively which added on to the processing time
- couldn't redeem MLH GCP credits
- lack of knowledge of Svelte.js framework
- lack of UI libraries to speed up development time
- GCP's Cloud Run deployment blocked due to Python requirements versioning
- deployment on Netlify and setting up custom domains
- constantly having Git merge conflicts

## Accomplishments that we're proud of
We made a working search engine! We learned a ton about development with GCP and deployment using cloud technologies !

Each of us was able to challenge ourselves by working with new tools and APIs. Moreover, we have been very supportive and helpful to each other by assisting them to the best of our knowledge. In the end, the team has made a functional product with most of the features we have envisioned from the start, and we bring home new knowledge, as well as new tools to explore later on. We knew we took on an ambitious project and we are really proud of what we were able to achieve in this hackathon.

## What we learned
We have integrated and tried many APIs from various providers, which was a valuable learning experience. Solving conflicts helps us understand more thoroughly how things work behind the scene. In addition, as a team consisting of different skill sets and from different time zones, we learned how to communicate and teamwork effectively. We also learn how to help each other since each teammate had different varying of experience with certain tech stacks and applications. It was everyone's first experience working with Svelte and GCP services, so getting all the additional APIs while reducing the processing time on top of that was rather challenging.

Alas, we also learned a lot of accessibility and on leveraging cloud technology.

## What's next for Readabl
We plan to improve the search and ranking algorithm so we can improve on the performance. We also hope to build a community that contributes back and makes the world a bit easier to navigate at least readability wise. We are also searching for new datasets which include more information, such as scrolling speed information, color vision deficiencies information on webpages to implement a more inclusive search function.

## How to Contact Us
- {ben}#5927 - Benedict Neo
- ceruleanox#7402 - Anita Yip
- Pravallika#2768 - Pravallika Myneni
- weichun#3945 - Wei Chun

## Resources

- [google-api-python-client custom search](https://github.com/googleapis/google-api-python-client/blob/main/samples/customsearch/main.py)
- [recursive custom search call source code](https://stackoverflow.com/a/63952603/11386747)
- [py-readability-metrics 1.4.4 documentation](https://py-readability-metrics.readthedocs.io/en/latest/) [repo](https://github.com/cdimascio/py-readability-metrics)
- [Custom Search JSON API docs](https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list)
- [Programmable search engine control panel](https://programmablesearchengine.google.com/) (get context key here)
