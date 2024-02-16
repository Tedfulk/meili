from meilisearch import Client

client = Client("http://localhost:7700", "MASTER_KEY")


def test_queries():
    movie = client.index("movies").search("botman")
    # assert the the title has some version of batman in it
    # print(movie)
    print(len(movie["hits"]))
    assert "batman" in movie["hits"][0]["title"].lower()


test_queries()
