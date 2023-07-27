import {SlashCommandBuilder} from '@discordjs/builders';
import {EmbedBuilder} from 'discord.js';
import type {Command} from '../types/Command';

export const help: Command = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Pony posting'),
	async run(interaction) {
		if (interaction.isChatInputCommand()) {
			await interaction.deferReply();
			const helpEmbed = new EmbedBuilder()
				.setColor(0x09999).setTitle('Chrysalis Help')
				.setDescription('Chrysalis is a bot that posts ponies. '
                    + 'It is currently in development, so not all features are available yet. '
                    + 'Here are the commands that are currently available:')
				.addFields({
					name: 'Pony', value: 'Posts a pony. You can specify a pony by name, '
                            + 'or you can get a random pony by not specifying a name.',
				},
				{name: 'Help', value: 'Shows this message.'})
				.setFooter({text: `Version ${process.env.npm_package_version ?? 'unknown'} Developed by annie_xo`});
			await interaction.editReply({embeds: [helpEmbed]});
		}
	},
};
