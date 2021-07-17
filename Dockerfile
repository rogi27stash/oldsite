FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./ /usr/src/app

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80

RUN yarn

EXPOSE 80
CMD [ "yarn", "start" ]
