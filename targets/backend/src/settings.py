from os import getenv

API_NAME = "Conduit - Graphql API"
DB_URL = getenv("DYNAMO_ENDPOIT")
ENV = getenv("ENV")
IS_DEBUG = bool(int(getenv("IS_DEBUG", "0"))) or False
