import mongoose from 'mongoose';

const homeworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    module: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    gist: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
}, { minimize: false });

export default mongoose.model('Homework', homeworkSchema);
