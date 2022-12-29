FROM node:18-alpine
WORKDIR /app
RUN npm install --global --force yarn
COPY . .
RUN yarn install
RUN yarn build
CMD ["node", "./build/index.js", "ORIGIN=http://tralist.unsteelix.keenetic.link"]
