FROM node:22-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

CMD HOSTNAME="0.0.0.0" npm start