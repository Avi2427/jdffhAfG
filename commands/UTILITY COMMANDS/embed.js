const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "embed",
    aliases: ["msg"],
    category: "UTILITY COMMANDS",
    description: "Send preloaded embeds",
    useage: "MSG",
    run: async(client, message, args) => {
        let embedembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("NEW COMMANDS AND REWORKS")
            .setDescription("__**1.SHOWPREFIX 2.HELP COMMAND REWORKED 2.NEW SECTION MODERATION 3.MUSIC COMMANDS REWORKED 4.DJ COMMAND BUG FIXED [WORKS PERFECTLY]**__")
            .setFooter("KURUVI | BY AVI", client.user.displayAvatarURL())

        message.reply(embedembed);
    }
}