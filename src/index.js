import Discord from 'discord.js';
import routes from './router/routes.js';

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

bot.on('ready', () => {
    console.log('Starting...');
});

routes.startBot(bot);

bot.login(token)