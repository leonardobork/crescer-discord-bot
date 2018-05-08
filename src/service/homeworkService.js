const Homework = require('../model/homework.js');

function saveHomework(name, description, gist) {
    const homework = new Homework({
        name: name,
        description: description,
        gist: gist
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

module.exports = {
    saveHomework,
    findAllMessage
}