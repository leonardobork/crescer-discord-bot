import Discord from 'discord.js';
import database from './config/database.js';
import routes from './router/routes.js';
import dotenv from 'dotenv';

dotenv.config();

database.connect(process.env.BOT_DB);

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

bot.on('ready', () => {
    console.log('Starting...');
});

routes.startBot(bot);

bot.login(token)