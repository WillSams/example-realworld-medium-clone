from fastapi.responses import JSONResponse

from routes import create_app
from routes.about import AboutRoute
from routes.graphql import GraphqlRoute

app = create_app(AboutRoute(), GraphqlRoute())


@app.exception_handler(404)
async def resource_not_found(request, exc) -> JSONResponse:
    return JSONResponse(content={"error": "Not found!"}, status_code=404)
