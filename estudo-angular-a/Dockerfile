FROM node:14-alpine as node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/estudo-angular-a /usr/share/nginx/html