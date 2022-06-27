FROM node:18.4.0-alpine

WORKDIR /home/app
COPY package*.json .

RUN npm install
COPY . .


CMD [ "npm", "run", "dev" ]
