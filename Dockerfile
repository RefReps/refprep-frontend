FROM node:16.13.2-alpine as build-step

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.17.8-alpine

COPY --from=build-step /app/dist/refprep-frontend /usr/share/nginx/html

RUN mkdir -p etc/nginx

COPY default.conf /etc/nginx/conf.d

EXPOSE 4200:80