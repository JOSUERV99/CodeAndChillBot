const Discord  = require('discord.js');
const { mongoClient } = require('../db');

module.exports = {
    name : 'phrase',
    description : 'Set or get a random TEC teacher phrase!',
    help: 'phrase || phrase <author> <phrase....>\n Example: phrase Mauricio me confirmas?',
    async execute(message, args) {
        
        if (args.length > 1) // insert phrase
        {
            let author = args[0];
            let phrase = args.slice(1, args.length).join(' ');

            message.reply(`Author:${author} => Phrase:${phrase}\n`);

            await mongoClient.db(process.env.DATABASE_NAME).collection('phrases').insertOne({author, phrase});
            message.reply('Got it!');

            const embed = new Discord.MessageEmbed()
                .setTitle(`${author}: ${phrase}`)
                .setColor(0x00A2A2);
            
            message.channel.send(embed);  
        }
        else 
        {   
            // get random phrase
            const phrasesFromDb = await mongoClient.db(process.env.DATABASE_NAME).collection('phrases').find().toArray();
            
            if (phrasesFromDb.length == 0)
            {
                message.reply('There\'s no phrases to show');
                return;
            }
            
            const randomPhraseIdx = Math.floor(Math.random() * phrasesFromDb.length);
            const {author, phrase} = phrasesFromDb[randomPhraseIdx];

            const embed = new Discord.MessageEmbed()
                .setTitle(`${author}: ${phrase}`)
                .setColor(0x00A2A2);
            
            message.channel.send(embed);  
        }
    } 
};