FROM node:18-alpine
ADD . /app
WORKDIR /app

RUN yarn install && yarn run tsc

ENV NEW_RELIC_APP_NAME=undefined-logging-repro

ENTRYPOINT [ "node", "/app/index.js"]