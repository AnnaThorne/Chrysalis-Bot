import type {SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder} from '@discordjs/builders';
import type {Interaction} from 'discord.js';

export type Command = {
	data: Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'> | SlashCommandSubcommandsOnlyBuilder;
	run: (interaction: Interaction) => Promise<void>;
};
