FROM node:10.16.0 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g react-scripts@3.3.0
RUN npm run build
