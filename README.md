# Chrysalis-Bot
![badge](https://img.shields.io/badge/UwU-Made%20with%20love%20%3C3-ff69b4)
<center>Discord bot written in TypeScript.</center>

# Usage
## Docker
You can download a ready to deploy docker image over at [docker hub](https://hub.docker.com/repository/docker/annathorne/chrysalisbot).
It's simple! Make sure you have docker installed, copy .env.sample to .env and fill in what you need and run:
```
$  docker run --env-file ./.env chrysalisbot
```
## Manual

If you don't want to use docker, just clone the repository and compile from source. Then run the bot on your Node.js instance:
```
$  npm run build
$  npm run start
```

If you run into errors that 'yarn' isn't installed, run `npm i -g yarn` and again.

# Commands
![image](https://user-images.githubusercontent.com/111367090/194105256-fd82b33e-93e3-45c3-9626-fc8cde8cfeb8.png)

Using /pony will return a random pony image.

# Developing Chrysalis-Bot

You can run the bot in development mode by running `npm run dev`. This will automatically restart the bot when you make changes to the source code.