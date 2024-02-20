import inspect
import logging
from enum import Enum
from typing import cast

from fastapi import status

from settings import API_NAME, DB_URL, ENV, IS_DEBUG

Logger = logging.getLogger()


def is_debug() -> bool:
    return cast(bool, IS_DEBUG)


def runtime_environment() -> str:
    return str(ENV)


def database_host() -> str:
    return str(DB_URL)


def get_calling_function_name() -> str:
    frame = inspect.currentframe()

    calling_frame = frame.f_back if frame is not None else None
    return calling_frame.f_code.co_name if calling_frame is not None else ""


def setup_file_logger() -> None:
    start_message = f"🚀 {API_NAME} ready to launch! 🚀"
    Logger.info(start_message)


def log_api_message(module_name: str, message: str) -> None:
    caller = get_calling_function_name()
    Logger.info(f"{module_name}.{caller} message(s):\n\t{message}")


def logger_exit_message() -> None:
    Logger.info(f"🛑 {API_NAME} stopped!")


class StatusCode(str, Enum):
    OK = status.HTTP_200_OK
    NOT_FOUND = status.HTTP_404_NOT_FOUND
    BAD_REQUEST = status.HTTP_400_BAD_REQUEST
