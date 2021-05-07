const Discord =  require('discord.js');
const fs = require('fs');
const path = require('path');

const { prefix } = require('../config.json');

const getCommands = () => {

    console.log(__dirname);
    const commandsPath = fs.readdirSync(__dirname).filter(file => !['help.js', 'music.js'].includes(file) );
    console.log(commandsPath);

    return commandsPath.filter(file => file.endsWith('.js')).map(file => {
        const command = require(`./${file}`);
        return `*${prefix}${command.name}* ${command.help}\n${command.description}\n`
    });
}

module.exports = {
    name : 'help',
    description : '',
    help : '',
    execute(message) {

        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#00dddd')
            .setTitle('Code&Chill Bot Help!')
            .setDescription(`${getCommands().join('\n')}`)
            .setThumbnail('https://i.imgur.com/L06H5iC.png')
            .setTimestamp();

        message.channel.send(helpEmbed);
    } 
};