const { isNumeric, allNumbers } = require('../utils/parser');
const { defaultRange, limits, trollMessages, presentation } = require('../data/random.json');
const { randomMessage } = require('../utils/rand');

module.exports = {
    name : 'randomint',
    description : 'Return a random number, using the range ...',
    async execute(message, args) {

        if ( !allNumbers(args) ) {
            message.reply( randomMessage(trollMessages) );
            return;
        }
        
        try {
            let lower = 0, upper = 0;

            // using defaultRange
            if (args.length == 0) { // default case
                lower = defaultRange[0];
                upper = defaultRange[1];
                message.reply(`${presentation} [ ${ Math.floor(Math.random() * upper) } ]`);
            }

            // from 0 to n
            if (args.length == 1) { // with only one number, set lower to 0
                lower = 0;
                upper = parseInt(args[0]);
                message.reply(`${presentation} [ ${ Math.floor(Math.random() * upper) } ]`);
            }

            // from a to b
            if (args.length == 2) {
                if ( isNumeric(args[0]) && isNumeric(args[1]) ) {
                    let a = parseInt(args[0]);
                    let b = parseInt(args[1]);

                    lower = a < b ? a : b;
                    upper = b >= a ? b : a;

                    message.reply(`${presentation} [ ${ lower + Math.floor(Math.random() * (upper - lower)) } ]`);
                }
            }
        
        } catch (e) {
            message.reply("Something happened!");
        }
    } 
};