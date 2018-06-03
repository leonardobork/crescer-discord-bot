import Discord from 'discord.js';
import dotenv from 'dotenv';
import routes from './router/routes';
import database from './config/database';

dotenv.config();

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

database.connect(process.env.BOT_DB);

bot.on('ready', () => {
    console.log('Starting...');
});

routes.startBot(bot);

bot.login(token);
