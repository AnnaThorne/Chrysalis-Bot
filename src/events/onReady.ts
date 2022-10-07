import type {Client} from 'discord.js';
import {commandList} from '../commands/_CommandList';
import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v10';

export const onReady = async (BOT: Client) => {
	const rest = new REST({version: '10'})
		.setToken(process.env.BOT_TOKEN!);

	const commandData = commandList.map(command => command.data.toJSON());

	await rest.put(Routes.applicationCommands(BOT.user?.id ?? 'missing id'), {body: commandData});

	console.log('ready!');
};
