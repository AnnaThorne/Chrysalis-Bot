FROM node:slim
COPY . /Chrysalis
WORKDIR /Chrysalis
RUN npm install
RUN npm run build
CMD npm run start