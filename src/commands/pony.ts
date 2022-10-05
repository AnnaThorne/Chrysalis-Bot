import {ICommand} from "../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import {getPonyData} from "../modules/getPonyData";
import {updatePonyData} from "../modules/updatePonyData";
import {EmbedBuilder} from "discord.js";
import {getRandomPonyData} from "../modules/getRandomPonyData";


export const pony: ICommand = {
    data: new SlashCommandBuilder()
        .setName("pony")
        .setDescription("Posts ponies")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription("Name of the pony")
                .setRequired(false)
                .setAutocomplete(true)
        ),
    run: async (interaction) => {
        if(interaction.isChatInputCommand()) {
            await interaction.deferReply();
            const text = interaction.options.getString("name");
            let targetPony;
            if(text) {
                targetPony = await getPonyData(text as string);
            } else {
                targetPony = await getRandomPonyData();
            }

            const ponyEmbed = new EmbedBuilder().setColor(0x09999).setTitle(targetPony?.ponyName!).setImage(targetPony?.imgUrl!);

            await interaction.editReply({embeds: [ponyEmbed]});

            return;
        }
    },
};