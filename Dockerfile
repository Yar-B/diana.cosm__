FROM node:alpine as build

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html
COPY --from=build /build .
CMD [ "nginx", "-g", "daemon off;" ]