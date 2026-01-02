import type {
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder,
	SlashCommandOptionsOnlyBuilder,
} from "@discordjs/builders";
import type { Interaction } from "discord.js";

export type Command = {
	data:
		| Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
		| SlashCommandSubcommandsOnlyBuilder
		| SlashCommandOptionsOnlyBuilder;
	run: (interaction: Interaction) => Promise<void>;
};
