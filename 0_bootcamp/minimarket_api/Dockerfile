FROM node:20-alpine3.18 AS development

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start:dev"]