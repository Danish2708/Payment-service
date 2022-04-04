FROM node:current-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 9400

CMD [ "server.js" ]