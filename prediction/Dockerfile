FROM node:12.4.0

ENV NODE_ENV=development \
  TZ=America/Santiago

RUN apt-get update && apt-get install -y -q inotify-tools

RUN mkdir -p /app /tmp/uploads

WORKDIR /app
