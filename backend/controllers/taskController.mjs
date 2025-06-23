import Task from '../models/task.mjs';

export const getTasks = async (req, res) => {
    console.log("Getting the tasks");
    try {
        const tasks = await Task.find()
        return res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
    }

    res.sendStatus(200);
}

export const createTask = async (req, res) => {
    console.log("Creating a task");

    try {
        const { text } = req.body;
        const newTask = new Task({ text, completed: false });
        const savedTask = await newTask.save();
        res.status(200).send(savedTask);
    } catch (err) {
        console.log(err);
        res.sendStatus(400)
    }

}

export const updateTask = async (req, res) => {
    console.log("Updating a task");
    
    try {
        
    }

    res.sendStatus(200);
}

export const deleteTask = async (req, res) => {
    console.log("Deleting a task");
    res.sendStatus(200);
}