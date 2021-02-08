# Para container de Python/Django (web)
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements_backend.txt /code/
RUN pip install -r requirements_backend.txt
COPY . /code/