const config = require('./config.json');
const fs = require('fs');
const path = require('path');

const setCommands = client => {
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, `${file}`));
        client.commands.set(command.name, command);
    }
};

const handleMessage = (message, client) => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    const somebodyIsCallingMe = client.commands.has(command);

    if ( somebodyIsCallingMe ) {
        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
};

module.exports = { handleMessage, setCommands };