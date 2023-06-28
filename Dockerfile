FROM node:18.14.2-alpine

WORKDIR /portfolio

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
