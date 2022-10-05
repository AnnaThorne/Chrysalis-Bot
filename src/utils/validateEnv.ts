export const validateEnv = () => {
    const envs = [
        'BOT_TOKEN'
    ];

    envs.forEach((env) => {
        if (!process.env[env]) {
        throw new Error(`${env} is not defined`);
        }
    });
}