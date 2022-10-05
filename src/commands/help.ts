import {SlashCommandBuilder} from "@discordjs/builders";
import {EmbedBuilder} from "discord.js";
import { ICommand } from "../interfaces/Command";

export const help: ICommand = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Pony posting"),
    run: async (interaction) => {
        if(interaction.isChatInputCommand()) {
            await interaction.deferReply();
            const helpEmbed = new EmbedBuilder()
                .setColor(0x09999).setTitle("Pony Bot")
                .setDescription("This bot posts ponies. Use /pony to post a pony.")
                .setFooter({text: `Version ${process.env.npm_package_version}`});
            await interaction.editReply({embeds: [helpEmbed]});
            return;
        }
    }
}