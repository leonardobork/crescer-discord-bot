import homeWorkController from '../controllers/homeworkController.js';

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
        homeWorkService.saveHomework(getSavingInformation(messageParameters))
            .then(() => message.channel.send('Salvo com sucesso...'))
            .catch(() => message.channel.send('Erro ao salvar o tema...'));
        break;

        case 'deletar tema':
        homeWorkController.deleteHomework(getSavingInformation(messageParameters))
            .then(() => message.channel.send('Deletado com sucesso...'))
            .catch(() => message.channel.send('Erro ao deletar o tema...'));
        break;

        case 'buscar temas':
        homeWorkController.findAllMessage().then(res => message.channel.send(res));
        break;
        
        case 'ajuda':
        message.channel.send(homeWorkController.getAjuda());
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

export default {startBot};