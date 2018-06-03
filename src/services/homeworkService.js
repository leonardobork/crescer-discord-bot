import Homework from '../model/homework';

function saveHomework(homeworkData) {
    const homework = new Homework({
        name: homeworkData[0],
        module: homeworkData[1],
        description: homeworkData[2],
        gist: homeworkData[3],
        deadline: homeworkData[4],
    });

    return new Promise(rev => rev(homework.save(err => err)));
}

function findAllMessage() {
    return new Promise((resolve, reject) => {
        Homework.find({}, (err, homework) => {
            let message = 'Aqui estão os temas:';
            if (err) reject(err);

            homework.forEach((work) => {
                message += `\n\n Id: ${work.id} \n Nome: ${work.name} \n Módulo: ${work.module} \n Descrição: ${work.description} \n Gist: ${work.gist} \n Data de entrega: ${work.deadline}`;
            });

            resolve(message);
        });
    });
}


function extractHomeworkID(homeworkData) {
    return homeworkData[0].trim();
}

function deleteHomework(homeworkData) {
    return new Promise((rev) => {
        rev(Homework.findByIdAndRemove({ _id: extractHomeworkID(homeworkData) }, err => err));
    });
}

function getAjuda() {
    return 'Bem vindo ao bot do crescer!\nFuncionalidades: \nSalvar tema: "!salvar tema" : <nome do tema>; <módulo do tema>; <descrição do tema>; <gist do tema>; <data-de-entrega>' +
    '\nBuscar temas: "!buscar tema \nDeletar tema: "!deletar tema": <id do tema>';
}

export default {
    saveHomework,
    findAllMessage,
    getAjuda,
    deleteHomework,
};
