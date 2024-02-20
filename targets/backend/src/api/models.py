from typing import Any, Dict

from pydantic import BaseModel

from api import utils


class ApiData(BaseModel):
    data: Dict[str, Any]
    status: utils.StatusCode
