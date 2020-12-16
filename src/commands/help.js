const Discord =  require('discord.js');
const { prefix } = require('../config.json');
const commands = [ 
    require('./8ball'), 
    require('./hi'), 
    require('./random'), 
    require('./randomUser') 
];

module.exports = {
    name : 'help',
    description : '',
    help : '',
    execute(message) {

        let content = '';
        for (let command of commands) {
            content += `${prefix}${command.name} ${command.help}\n${command.description}\n\n`;
        }

        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#00dddd')
            .setTitle('Code&Chill Bot Help!')
            .setDescription(`${content}`)
            .setThumbnail('https://i.imgur.com/L06H5iC.png')
            .setTimestamp();

        message.channel.send(helpEmbed);
    } 
};