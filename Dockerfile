FROM node:alpine AS build
WORKDIR /app
COPY . /app
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:alpine AS prod
WORKDIR /app
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install -P

FROM node:alpine AS deploy
WORKDIR /app
COPY --from=build /app/prod ./prod
COPY --from=prod /app/node_modules ./node_modules
COPY --from=prod /app/package.json ./
CMD npm run start