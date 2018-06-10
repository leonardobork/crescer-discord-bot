import cron from 'node-cron';
import homeworkService from '../services/homeworkService';

function startHomeworkAlarm(bot) {
    const channel = bot.channels.find('name', 'general');
    cron.schedule('* */2 * * *', () => {
        homeworkService.getHomeworksForToday()
            .then((homeworks) => {
                if (homeworks !== []) channel.send('Temas para hoje:');
                homeworks.forEach((homework) => {
                    channel.send(`Tema: ${homework.name}\nEntrega: ${homework.deadline}\nGist: ${homework.gist}`);
                });
            })
            .catch((err) => {
                if (err) console.log(err);
            });
    });
}

export default {
    startHomeworkAlarm,
};
