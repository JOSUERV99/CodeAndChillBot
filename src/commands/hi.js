const { chillMessages } = require('../data/hi.json');

module.exports = {
    name : 'hi',
    description : 'Random phrases for everyone!',
    execute(message) {
        message.reply( chillMessages[Math.floor(Math.random() * chillMessages.length)] );
    } 
};