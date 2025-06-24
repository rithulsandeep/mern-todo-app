import axios from 'axios';

const URL = "http://localhost:5000/api/tasks"

export async function getTasks() {
    try {
        const response = await axios.get(URL);
        console.log("Getting Tasks from React");
        return response.data;
    } catch (err) {
        console.log(err);
        return []
    }
}

export async function createTask(task) {
    try {
        const response = await axios.post(URL, task);
        console.log("Creating Task from React");
        return response;
    } catch (err) {
        console.log(err);
        return null
    }
}

export async function updateTask(id, completed) {
    try {
        await axios.put(`${URL}/${id}`, { completed: !completed });
        console.log("Updating Task from React");
    } catch (err) {
        console.log(err);
    }
}

export async function deleteTask(id) {
    try {
        const response = await axios.delete(`${URL}/${id}`);
        console.log("Deleting Task from React");
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}