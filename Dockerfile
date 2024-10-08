FROM node:16-alpine as build

ARG VITE_WEATHER_API_KEY

ENV VITE_WEATHER_API_KEY=$VITE_WEATHER_API_KEY

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
