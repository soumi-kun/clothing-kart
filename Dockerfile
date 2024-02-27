# Stage 1: Build an Angular Docker Image
FROM node:14.17.5 as build
WORKDIR /usr/src/app
COPY . .
RUN npm install
COPY . .
RUN npm run build --prod
# Stage 3: use the compiled app, ready for production with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY /nginx-custom.conf /etc/nginx/conf.d/
COPY --from=build /usr/src/app/dist/diy-kart/ /usr/share/nginx/html/