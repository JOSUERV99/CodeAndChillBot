const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const { setCommands, handleMessage } = require('./handler');

client.commands = new Discord.Collection();
setCommands(client);

client.once('ready', () => {
	console.log('Chilling bro!');
});

client.on('message', (message) => handleMessage(message, client));
client.login(process.env.BOT_TOKEN);

module.exports = client;