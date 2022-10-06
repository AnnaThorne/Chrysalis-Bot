FROM node:latest
COPY . /Chrysalis
WORKDIR /Chrysalis
RUN yarn install
RUN npm run build
CMD npm run start