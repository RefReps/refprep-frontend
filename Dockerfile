FROM node:12-alpine as build-step

WORKDIR /refprep-frontend

COPY package.json /refprep-frontend

RUN npm install

COPY . /refprep-frontend

RUN npm run build

FROM nginx:1.17.1-alpine

COPY --from=build-step /refprep-frontend /usr/share/nginx/html 