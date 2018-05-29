import HomeworkService from '../services/homeworkService';

function saveHomework(homeworkData) {
    const homework = {
        name: homeworkData[0],
        module: homeworkData[1],
        description: homeworkData[2],
        gist: homeworkData[3],
        deadline: homeworkData[4],
    };

    return HomeworkService.addHomework(homework);
}

function findAllMessage() {
    return new Promise((resolve, reject) => {
        HomeworkService.getHomeworks().then((snapshot) => {
            let message = 'Aqui estão os temas:';

            snapshot.forEach((document) => {
                const work = document.data();
                const { id } = document.id;

                message += `\n\n Id: ${id} \n Nome: ${work.name} \n Módulo: ${work.module} \n Descrição: ${work.description} \n Gist: ${work.gist} \n Data de entrega: ${work.deadline}`;
            });

            resolve(message);
        }).catch(err => reject(err));
    });
}

function extractHomeworkID(homeworkData) {
    return homeworkData[0].trim();
}

function deleteHomework(homeworkData) {
    return HomeworkService.deleteHomework(extractHomeworkID(homeworkData));
}

function getAjuda() {
    return 'Bem vindo ao bot do crescer! \nFuncionalidades: \n Salvar tema: "!salvar tema" : <nome do tema>; <módulo do tema>; <descrição do tema>; <gist do tema>; <data-de-entrega>' +
    '\nBuscar temas: "!buscar tema \n Deletar tema: "!deletar tema ": <id do tema>';
}

export default {
    saveHomework,
    findAllMessage,
    getAjuda,
    deleteHomework,
};
