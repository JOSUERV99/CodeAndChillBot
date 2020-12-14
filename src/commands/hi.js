const { chillMessages } = require('../data/hi.json');
const { randomMessage } = require('../utils/rand');

module.exports = {
    name : 'hi',
    description : 'Random phrases for everyone!',
    execute(message) {
        message.reply( randomMessage(chillMessages) );
    } 
};