FROM node:14.17.0-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.20.1

COPY --from=build-step /app/dist/refprep-frontend /usr/share/nginx/html

RUN mkdir -p etc/nginx

COPY default.conf /etc/nginx/conf.d

EXPOSE 4200:80