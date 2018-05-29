import Firebase from '../config/firebase';

const homeworkCollection = 'homeworks';

function getHomeworks() {
    return Firebase.firestore.collection(homeworkCollection).get();
}

function addHomework(homework) {
    return Firebase.firestore.collection(homeworkCollection).add(homework);
}

function deleteHomework(id) {
    return Firebase.firestore.collection(homeworkCollection).doc(id).delete();
}

export default {
    getHomeworks,
    addHomework,
    deleteHomework,
};
