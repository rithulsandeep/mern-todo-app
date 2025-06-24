import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    text: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    completed: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    }
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;

