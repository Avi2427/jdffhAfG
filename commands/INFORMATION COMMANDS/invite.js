const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "INFORMATION COMMANDS",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("INVITE | KURUVI [THE SPEED]")
            .setDescription("[INVITE ME NOW, thanks](https://discord.com/oauth2/authorize?client_id=818042751068798986&permissions=8&scope=bot)\n\n[Invite 2021's Fastest Music Bot](https://discord.com/oauth2/authorize?client_id=818042751068798986&permissions=8&scope=bot)")
            .setFooter("KURUVI | BY AVI", client.user.displayAvatarURL())

        message.reply(inviteembed);
    }
}

/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
