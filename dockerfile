# 1) Node image for building frontend assets

FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build


# 2) nginx stage to serve frontend assets
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]