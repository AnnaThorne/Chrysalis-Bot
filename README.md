# Chrysalis-Bot

![badge](https://img.shields.io/badge/UwU-Made%20with%20love%20%3C3-ff69b4) [![CodeFactor](https://www.codefactor.io/repository/github/annathorne/chrysalis-bot/badge/main)](https://www.codefactor.io/repository/github/annathorne/chrysalis-bot/overview/main)

Discord bot written in TypeScript.

## Usage

### Docker

You can download a ready to deploy docker image over at [docker hub](https://hub.docker.com/repository/docker/annathorne/chrysalisbot).
It's simple! Just make sure you have docker installed, copy .env.sample to .env and fill in your secrets and run the following command:

```docker
docker run --env-file ./.env chrysalisbot
```

### Manual

If you don't want to use docker, just clone the repository and compile from source. Then run the bot on your Node.js instance:

```npm
npm run build
npm run start
```

## Commands

![image](https://github.com/AnnaThorne/Chrysalis-Bot/assets/111367090/3c198d6a-c5bb-4b4c-9e13-195f551c4339)


Using /pony will return a random pony image.
