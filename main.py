from fastapi import FastAPI, HTTPException, Query
import meilisearch
import logging
import os

logging.basicConfig(level=logging.INFO)
master_key = os.environ.get("MEILISEARCH_MASTER_KEY")
app = FastAPI(title="fullstack-meilisearch Backend")


@app.get("/")
def read_root():
    logging.info("Root endpoint was called")
    return {
        "message": "Welcome to fullstack-meilisearch! Try hitting the '/ping' and '/search' endpoints."
    }


@app.get("/ping")
def ping():
    logging.info("Ping endpoint was called")
    try:
        return {"status": "success"}
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}", exc_info=True)
        return {"status": "error", "message": "Internal server error"}


@app.get("/search")
def search(query: str = Query(None, min_length=1)):
    logging.info(f"Search endpoint called with query: {query}")
    if not query:
        raise HTTPException(
            status_code=400,
            detail="Query parameter 'query' is required and must not be empty.",
        )
    try:
        client = meilisearch.Client("http://127.0.0.1:7700", master_key)
        index = client.index("movies")
        search_results = index.search(query)
        logging.info("Search successful")
        return {"results": search_results}
    except Exception as e:
        logging.error(f"Error occurred while searching: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500, detail="An error occurred during the search."
        )
