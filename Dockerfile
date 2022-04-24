FROM bitnami/node:16
#AS builder

LABEL org.opencontainers.image.version="0.1"
LABEL org.opencontainers.image.authors="Paul Forness"
LABEL org.opencontainers.image.title="spot-setlist-server"
LABEL org.opencontainers.image.description="Node container for spot-setlist web server."

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -D

COPY ./src ./src
COPY tsconfig.json .
RUN npm run build

#FROM gcr.io/distroless/nodejs:16
#WORKDIR /usr/app

#COPY --from=builder . .

#USER nobody

EXPOSE 8080
CMD [ "node", "lib/index.js" ]