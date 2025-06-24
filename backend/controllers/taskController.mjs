import Task from '../models/task.mjs';

export const getTasks = async (req, res) => {
    console.log("Getting the tasks");
    try {
        const tasks = await Task.find()
        return res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
    }
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
        const { id } = req.params;
        const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).send(updated);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Task.findByIdAndDelete(id);
        return res.status(200).send(deleted);
    } catch (err) {
        console.log(err);
        res.send(400);
    }
}