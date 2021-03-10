# Para container de Python/Django (web)
FROM python:3
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=backend_lab.settings
WORKDIR /code
COPY requirements_backend.txt /code/
RUN pip install --upgrade pip
RUN pip install -r requirements_backend.txt
RUN pip install djongo
RUN pip install django-rest-framework
COPY . /code/
CMD ["python3.9", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["python3.9", "manage.py", "migrate", "--database=default"] 
CMD ["python3.9", "manage.py", "migrate", "--database=kafka"]
