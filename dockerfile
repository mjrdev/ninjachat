FROM node:16.19-alpine

RUN apk add bash

WORKDIR /usr/app

COPY .env ./
COPY package*.json ./
COPY prisma ./prisma/
COPY yarn.lock ./
COPY tsconfig.json ./
COPY . ./
RUN yarn
RUN npm install -g dotenv-cli

EXPOSE 3000

RUN yarn prisma generate

CMD yarn start:dev