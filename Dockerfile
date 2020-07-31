FROM node:12.16.3-alpine
 
WORKDIR /usr/src/app

RUN apk add git
 
COPY package*.json ./
 
RUN npm install 

COPY . .

RUN npm run build
 
EXPOSE 3000

CMD [ "node", "server.js" ]
