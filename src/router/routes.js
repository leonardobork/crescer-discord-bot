const homeWorkService = require('../service/homeworkService.js');

function startBot(bot) {
    bot.on('message', message => {
        if (botSendTheMessage(message)) return;
        
        if (isAMessage(message)) {
            directMessageToFunctionality(message);
        }
    });
}

function directMessageToFunctionality(message){
    const messageParameters = getMessageParameters(message);
    switch(getChosenFunctionality(messageParameters)) {
        case 'módulos':
        //todo
        break;
        
        case 'salvar tema':
        homeWorkService.saveHomework(getSavingInformation(messageParameters)).then(err =>{
            if (err) {
                message.channel.send('Erro ao salvar o tema...');
            } else {
                message.channel.send('Salvo com sucesso...');
            }
        });
        break;

        case 'deletar tema':
        homeWorkService.deleteHomework(getSavingInformation(messageParameters)).then(err =>{
            if (err) {
                console.log(err)
                message.channel.send('Erro ao deletar o tema...');
            } else {
                message.channel.send('Deletado com sucesso...');
            }
        });
        break;

        case 'buscar temas':
        homeWorkService.findAllMessage().then(res => message.channel.send(res));
        break;
        
        case 'ajuda':
        message.channel.send(homeWorkService.getAjuda());
        break;
        
        default:
        message.reply('Repita por favor... Ou peça !ajuda');
        break
    }
}

function botSendTheMessage(message) {
    return message.author.bot;
}

function getMessageParameters(message){
    return message.content.substring(1).split(":");
}

function isAMessage(message) {
    return message.content.indexOf('!') === 0;
}
function getChosenFunctionality(messageParameters){
    return messageParameters[0].toLowerCase();
}

function getSavingInformation(messageParameters) {
    return messageParameters[1].split(';');
}

module.exports = {startBot};