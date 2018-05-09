const Discord = require('discord.js');
const database = require('./config/database.js');
const homeWorkService = require('./service/homeworkService.js');
console.log(process.env.BOT_DB)
database.connect(process.env.BOT_DB);

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;


bot.on('ready', () => {
    console.log('Were in! Hahaha');
});

bot.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content.indexOf('!') === 0) {
        var parameters = message.content.substring(1).split(":");
        switch(parameters[0].toLowerCase()) {
            case 'módulos':
            message.reply('pera meu bom, vou procurar no banco aq')
            break;

            case 'salvar tema':
                const homeworkData = parameters[1].split(';');
                homeWorkService.saveHomework(homeworkData[0], homeworkData[1], homeworkData[2])
                    .then(function (err) {
                        if (err) {
                            console.log(err)
                            message.channel.send('Erro ao salvar o tema...');
                        } else {
                            message.channel.send('Salvo com sucesso...');
                        };
                    });
            break;

            case 'buscar temas':
                homeWorkService.findAllMessage().then(res => message.channel.send(res));
            break;

            case 'ajuda':
                var ajuda = 'Bem vindo ao bot do crescer! \n Funcionalidades: \n Salvar tema:  \"!salvar tema\" : <nome do tema>; <descrição do tema>; <gist do tema>' +
                '\n Buscar temas: \"!buscar tema\"'
                message.channel.send(ajuda);
            break;

            default:
            message.reply('Repita por favor... Ou peça !ajuda');
            break
        }
    }
});


bot.login(token)