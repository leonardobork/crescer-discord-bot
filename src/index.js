const Discord = require('discord.js');
const database = require('./config/database.js');
const routes = require('./router/routes.js');
const dotenv = require('dotenv');

dotenv.config();

database.connect(process.env.BOT_DB);

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

bot.on('ready', () => {
    console.log('Starting...');
});

routes.startBot(bot);

bot.login(token)