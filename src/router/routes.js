import homeworkService from '../services/homeworkService';

function botSendTheMessage(message) {
    return message.author.bot;
}

function getMessageParameters(message) {
    return message.content.substring(1).split(':');
}

function isAMessage(message) {
    return message.content.indexOf('!') === 0;
}

function getChosenFunctionality(messageParameters) {
    return messageParameters[0].toLowerCase();
}

function getSavingInformation(messageParameters) {
    return messageParameters[1].split(';');
}

function directMessageToFunctionality(message) {
    const messageParameters = getMessageParameters(message);
    switch (getChosenFunctionality(messageParameters)) {
    case 'módulos':
        // todo
        break;

    case 'salvar tema':
        homeworkService.saveHomework(getSavingInformation(messageParameters))
            .then(() => message.channel.send('Salvo com sucesso...'))
            .catch(() => message.channel.send('Erro ao salvar o tema...'));
        break;

    case 'deletar tema':
        homeworkService.deleteHomework(getSavingInformation(messageParameters))
            .then(() => message.channel.send('Deletado com sucesso...'))
            .catch(() => message.channel.send('Erro ao deletar o tema...'));
        break;

    case 'buscar temas':
        homeworkService.findAllMessage().then(res => message.channel.send(res));
        break;

    case 'ajuda':
        message.channel.send(homeworkService.getAjuda());
        break;

    default:
        message.reply('Repita por favor... Ou peça !ajuda');
        break;
    }
}

function startBot(bot) {
    bot.on('message', (message) => {
        if (botSendTheMessage(message)) return;

        if (isAMessage(message)) {
            directMessageToFunctionality(message);
        }
    });
}

export default { startBot };
