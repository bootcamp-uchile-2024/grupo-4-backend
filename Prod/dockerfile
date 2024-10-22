FROM node:22-alpine3.19

RUN mkdir /home/node/nest/ && chown -R node:node /home/node/nest

COPY dist /home/node/nest/dist

COPY package.json /home/node/nest/package.json

COPY .env.production /home/node/nest/.env.production

WORKDIR /home/node/nest

RUN npm install --production

CMD [ "npm", "run",  "start:prod" ]