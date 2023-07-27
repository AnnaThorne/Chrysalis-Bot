FROM node:slim
COPY . /Chrysalis
WORKDIR /Chrysalis
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD pnpm run start