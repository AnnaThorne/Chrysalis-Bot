import type {Command} from '../types/Command';
import {SlashCommandBuilder} from '@discordjs/builders';
import {EmbedBuilder} from 'discord.js';
import {getRandomPonyDataFrom926} from '../modules/getRandomPonyDataFrom926';

export const pony: Command = {
	data: new SlashCommandBuilder()
		.setName('pony')
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
			/* Const user = interaction.member?.user.id;
        const guildMember = await interaction.guild?.members.fetch(''+user) as GuildMember;
            await guildMember.timeout(300); */
			const text = interaction.options.getString('name');
			let targetPony;
			if (text) {
				text.replace(' ', '+');
				targetPony = await getRandomPonyDataFrom926(`${text}+mlp`);
			} else {
				/* Switch (ponyRandom(0, 1)) {
                    case 0:
                        targetPony = await getRandomPonyData();
                        break;
                    case 1:
                        targetPony = await getRandomPonyDataFrom926("mlp");
                        break;
                    default:
                        targetPony = await getRandomPonyDataFrom926("mlp");
                        break;
                } */
				targetPony = await getRandomPonyDataFrom926('mlp');
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
