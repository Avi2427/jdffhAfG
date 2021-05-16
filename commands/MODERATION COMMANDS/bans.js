const { MessageEmbed } = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: 'bans',
    category: "MODERATION COMMANDS",
    description: "List all Server Bans",
    usage: "bans",

    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            let bansembed = new MessageEmbed()
                .setTitle(`Ban's`)
                .setColor("#FF0000")
                .setDescription(`**• Banned User**: ${bans.size}`)
                .setFooter("Ban Status | Code By Avi " , client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(bansembed)

        })
    }
}