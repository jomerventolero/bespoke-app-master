FROM node:12-alpine

RUN apk add --no-cache python2 g++ make
WORKDIR /bespoke-app-master/
COPY . .
RUN yarn install --production
CMD ["npm run dev", "/package.json"]