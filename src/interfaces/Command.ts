import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder} from "@discordjs/builders";
import {CommandInteraction, Interaction} from "discord.js";

export interface ICommand{
    data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder;
    run: (interaction: Interaction) => Promise<void>;
}