import {ActivityType, Client} from 'discord.js';
import {intentOptions} from './config/IntentOptions';
import {validateEnv} from './utils/validateEnv';
import {onInteraction} from './events/onInteraction';
import {onReady} from './events/onReady';
import {databaseConnect} from './database/databaseConnect';

(async () => {
	validateEnv();
	const bot = new Client({intents: intentOptions});
	await databaseConnect();

	bot.on('ready', async () => onReady(bot));

	bot.on('interactionCreate',
		async interaction => onInteraction(interaction));

	await bot.login(process.env.bot_TOKEN).then(() => {
		bot.user?.setPresence({activities: [{name: 'Banned from Equestria', type: ActivityType.Playing}], status: 'online'});
		console.log('logged in!');
	});
})();
