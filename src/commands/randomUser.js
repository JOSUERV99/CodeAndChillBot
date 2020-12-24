const Discord = require('discord.js');
const { congrats_message }  = require('../data/randomUser.json');
const { server_id } = require('../config.json');
const { randomMessage } = require('../utils/rand');

module.exports = {
    name : 'randomuser',
    description : 'Return a random user? ...',
    help : '',
    execute(message, _) {

        // users who have written to the channel
        let users = message.channel.members.array();
        let noBotUsers = users.filter( user => !user.user.bot ).map( user => user.user.username );

        const congratsMessage = new Discord.MessageEmbed()
            .setTitle("And the lucky one is ...")
            .setColor(0x00A2A2)
            .setDescription(`${randomMessage(noBotUsers)}\n ${congrats_message}`)
            .setThumbnail("https://i.imgur.com/XF0jOkw.png");

        message.channel.send(congratsMessage);  
    } 
};