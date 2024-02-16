import json
from meilisearch import Client
import logging
import os

logging.basicConfig(level=logging.INFO)

master_key = os.environ.get("MEILISEARCH_MASTER_KEY")

# Initialize the MeiliSearch client
client = Client("http://127.0.0.1:7700", master_key)

try:
    # Load movies
    json_file = open("movies.json", encoding="utf-8")
    movies = json.load(json_file)
    client.index("movies").add_documents(movies)
except Exception as e:
    logging.error(f"Error occurred while indexing data: {str(e)}", exc_info=True)
