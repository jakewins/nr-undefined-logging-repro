FROM node:18-alpine
ADD . /app
RUN yarn install
WORKDIR /app

ENV NEW_RELIC_APP_NAME=undefined-logging-repro

ENTRYPOINT [ "node", "/app/index.js"]