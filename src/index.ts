import { ActivityType, Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { validateEnv } from "./utils/validateEnv";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { databaseConnect } from "./database/databaseConnect";

async () => {
  validateEnv();
  const BOT = new Client({ intents: IntentOptions });
  await databaseConnect();

  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await BOT.login(process.env.BOT_TOKEN).then(() => {
    BOT.user?.setPresence({
      activities: [
        { name: "Banned from Equestria", type: ActivityType.Playing },
      ],
      status: "online",
    });
    console.log("logged in!");
  });
};
