const Homework = require('../model/homework.js');

function saveHomework(homeworkData) {
    const homework = new Homework({
        name: homeworkData[0],
        description: homeworkData[1],
        gist: homeworkData[2]
    });

    return new Promise(rev => rev(homework.save(err => err)));
}

function findAllMessage() {
    return new Promise((resolve, reject) => {
      Homework.find({}, (err, homework) => {
        if (err) reject(err);
        
        var message = 'Aqui estão os temas:';
        homework.forEach(work => {
            message = message + `\n\n Nome: ${work.name} \n Descrição: ${work.description} \n Gist: ${work.gist}`
        });

        resolve(message);
      });
    });
}

function getAjuda() {
    return 'Bem vindo ao bot do crescer! \n Funcionalidades: \n Salvar tema:  \"!salvar tema\" : <nome do tema>; <descrição do tema>; <gist do tema>' +
    '\n Buscar temas: \"!buscar tema\"';
}

module.exports = {
    saveHomework,
    findAllMessage,
    getAjuda
}