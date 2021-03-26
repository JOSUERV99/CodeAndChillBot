const Discord  = require('discord.js'); 
const { randomMessage } = require('../utils/rand');
const { responses } = require('../data/8ball.json');

const musicPrefixes = [
    '!p => Rythm!',
    '_p => Octave!',
    '-p => Groove!'
];

module.exports = {
    name : 'music',
    description : 'Play music in your voice channel with a bot!',
    help: 'Help with music prefixes!',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Music Prefixes!")
            .setColor(0x00A2A2)
            .setDescription(
                musicPrefixes.join('\n')
            )
            .setThumbnail("https://i.imgur.com/L06H5iC.png");
        message.channel.send(embed);  
    } 
};