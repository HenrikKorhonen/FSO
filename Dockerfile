FROM node

WORKDIR /code
COPY .npmrc .

RUN npx create-react-app part1
WORKDIR part1
