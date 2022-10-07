import type {Command} from '../types/Command';
import {SlashCommandBuilder} from '@discordjs/builders';
import type {TextChannel} from 'discord.js';
import {EmbedBuilder} from 'discord.js';
import {getRandomPonyDataFrom621} from '../modules/getRandomPonyDataFrom621';

export const pony621: Command = {
	data: new SlashCommandBuilder()
		.setName('pony621')
		.setDescription('Posts ponies')
		.addStringOption(option =>
			option
				.setName('name')
				.setDescription('Name of the pony')
				.setRequired(false)
				.setAutocomplete(true),
		),
	async run(interaction) {
		if (interaction.isChatInputCommand()) {
			await interaction.deferReply();
			const text = interaction.options.getString('name');
			const id = interaction.channel?.id ?? 'none';
			const c = (await interaction.guild?.channels.fetch(id)) as TextChannel;
			if (!c.nsfw) {
				const ponyEmbed = new EmbedBuilder()
					.setColor(0x09999)
					.setTitle('Oopsie woopsie~')
					.setDescription('This command can only be used in NSFW channels');
				await interaction.editReply({embeds: [ponyEmbed]});
				return;
			}

			let targetPony;
			if (text) {
				text.replace(' ', '+');
				targetPony = await getRandomPonyDataFrom621(`${text}+mlp`);
			} else {
				targetPony = await getRandomPonyDataFrom621('mlp');
			}

			const fallBackUrl
        = 'https://cdn.discordapp.com/attachments/241272669868130304/1027240631535407164/unknown.png';
			const ponyEmbed = new EmbedBuilder()
				.setColor(0x09999)
				.setTitle(targetPony?.ponyName ?? 'Pony')
				.setImage(targetPony?.imgUrl ?? fallBackUrl);

			await interaction.editReply({embeds: [ponyEmbed]});
		}
	},
};
