const Discord  = require('discord.js'); 
const { randomMessage } = require('../utils/rand');
const { responses } = require('../data/8ball.json');

module.exports = {
    name : '8ball',
    description : 'Let the magic 8 ball decide for your future!',
    help: '<question>',
    execute(message, args) {
        if (args.length > 0) {
            const embed = new Discord.MessageEmbed()
                .setTitle("(8) ball")
                .setColor(0x00A2A2)
                .setDescription(`=> ${randomMessage(responses)}`)
                .setThumbnail("https://i.imgur.com/IIzf5ao.png");
            message.channel.send(embed);
        }
        else 
        {
            const embed = new Discord.MessageEmbed()
                .setTitle("(8) ball")
                .setColor(0x00A2A2)
                .setDescription(`====> Ask me about what you want to know about the future `)
                .setThumbnail("https://i.imgur.com/IIzf5ao.png");
                
            message.channel.send(embed);
        }
    } 
};