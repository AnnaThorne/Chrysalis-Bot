import type {Interaction} from 'discord.js';
import {commandList} from '../commands/_CommandList';

export const onInteraction = async (interaction: Interaction) => {
	if (!interaction.isCommand()) {
		return;
	}

	for await (const command of commandList) {
		if (interaction.commandName === command.data.name) {
			await command.run(interaction);
			break;
		}
	}
};
