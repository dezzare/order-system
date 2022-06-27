FROM node:18.4.0-alpine

WORKDIR /home/app
COPY package*.json .

RUN npm ci
COPY . .


CMD [ "npm", "run", "dev" ]
