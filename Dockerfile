FROM node:14


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app

RUN npm install
RUN npm install -g @angular/cli@12.2.9

COPY . /app

EXPOSE 4200

CMD ["ng", "serve"]
