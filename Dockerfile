FROM node:latest
COPY . /Chrysalis
WORKDIR /Chrysalis
RUN npm install
RUN npm run build
CMD npm run start