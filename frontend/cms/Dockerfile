# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY ./public ./public
COPY ./src ./src
COPY ./.env .
COPY ./package.json .
COPY ./yarn.lock .
COPY ./tsconfig.json .
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3000
VOLUME [ "/app" ]