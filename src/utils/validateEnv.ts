export const validateEnv = () => {
	const envs = [
		'BOT_TOKEN',
		'MONGO_URI',
	];

	envs.forEach(env => {
		if (!process.env[env]) {
			throw new Error(`${env} is not defined`);
		}
	});
};
