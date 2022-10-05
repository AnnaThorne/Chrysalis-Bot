import {Client} from "discord.js";
import {CommandList} from "../commands/_CommandList";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

export const onReady = async (BOT: Client) => {
    const rest = new REST({version: "10"})
        .setToken(process.env.BOT_TOKEN as string);

    const commandData = CommandList.map((command) => command.data.toJSON());

    await rest.put(Routes.applicationCommands(BOT.user?.id || "missing id"), {body: commandData});
    console.log("ready!");
};