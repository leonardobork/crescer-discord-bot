// Import the discord.js module
const Discord = require('discord.js')
const settings = require('./settings.js');

// Create an instance of Discord that we will use to control the bot
const bot = new Discord.Client();

// Token for your bot, located in the Discord application console - https://discordapp.com/developers/applications/me/
const token = settings.token;

// Gets called when our bot is successfully logged in and connected
bot.on('ready', () => {
    console.log('Hello World!');
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;
    
    // Check if the message starts with the `!` trigger
    if (message.content.indexOf('!') === 0) {
        // Get the user's message excluding the `!`
        var text = message.content.substring(1);
                
        switch(text.toLowerCase()) {
            case 'tem tema parsero?':
            message.reply('sempre tem meu bom')
            break;

            case 'ajuda':
            message.reply('nao sou instrutor se vira ae meu parsa');
            break;

            case 'cansei':
            message.reply('idai meu')
            break;

            case 'qual modulo estamos?':
            message.reply('af mano eh so ver no grupo do zip zop')
            break;

            default:
            message.reply('n entendi nada meu bom');
            break
        }

    }
});


bot.login(token)