const { congrats_message }  = require('../data/randomUser.json');
const { server_id } = require('../config.json');

module.exports = {
    name : 'randomuser',
    description : 'Return a random user? ...',
    help : '',
    async execute(message) {

        // TODO: get random users and generate a cool card 
        // with the profile picture, info and congrats message
        message.reply(' Por implementar');
    } 
};