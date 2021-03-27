const Discord = require('discord.js');
const client = new Discord.Client();
const config  = require('./config.json');
require('dotenv').config();

const { setCommands, handleMessage } = require('./handler');

client.commands = new Discord.Collection();
setCommands(client);

client.once('ready', () => {
	console.log('Chilling bro!');
	client.user.setPresence({
        status: 'online',
        activity : {
            name : `${config.prefix}help`,
            type : `PLAYING`
        }
    });
});

client.on('message', (message) => handleMessage(message, client));
client.login(process.env.BOT_TOKEN);

process.on('SIGINT', () => client.destroy()); // close client when sigint (program interruption) occurs

module.exports = client;