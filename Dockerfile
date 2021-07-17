FROM node:16-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python3 && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

WORKDIR /usr/src/app

COPY ./ /usr/src/app

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80

RUN yarn

EXPOSE 80
CMD [ "yarn", "start" ]
