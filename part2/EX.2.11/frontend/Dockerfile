FROM node:18.13

WORKDIR /usr/src/app

COPY package*.json  /usr/src/app


RUN npm install && npm install -g @angular/cli

COPY . /usr/src/app

# EXPOSE 4200

CMD ["npm", "start"]
