const Homework = require('../model/homework.js');

function saveHomework(homeworkData) {
    const homework = new Homework({
        name: homeworkData[0],
        module: homeworkData[1],
        description: homeworkData[2],
        gist: homeworkData[3],
        deadline: homeworkData[4]
    });

    return new Promise(rev => rev(homework.save(err => err)));
}

function findAllMessage() {
    return new Promise((resolve, reject) => {
      Homework.find({}, (err, homework) => {
        if (err) reject(err);
        
        var message = 'Aqui estão os temas:';
        homework.forEach(work => {
            message = message + `\n\n Id: ${work.id} \n Nome: ${work.name} \n Módulo: ${work.module} \n Descrição: ${work.description} \n Gist: ${work.gist} \n Data de entrega: ${work.deadline}`
        });

        resolve(message);
      });
    });
}

function getAjuda() {
    return 'Bem vindo ao bot do crescer! \n Funcionalidades: \n Salvar tema:  \"!salvar tema\" : <nome do tema>; <módulo do tema>; <descrição do tema>; <gist do tema>; <data-de-entrega>' +
    '\n Buscar temas: \"!buscar tema\"';
}

module.exports = {
    saveHomework,
    findAllMessage,
    getAjuda
}