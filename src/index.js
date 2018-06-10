import Discord from 'discord.js';
import dotenv from 'dotenv';
import routes from './router/routes';
import database from './config/database';
import homeworkAlarm from './middlewares/homework-alarm';

dotenv.config();

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

database.connect(process.env.BOT_DB);

bot.on('ready', () => {
    console.log('Starting...');
    homeworkAlarm.startHomeworkAlarm(bot);
});


routes.startBot(bot);

bot.login(token);
