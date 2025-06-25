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
        const response = await axios.post(`${URL}`, task);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


export async function updateTask(id, updatedFields) {
    try {
        const response = await axios.put(`${URL}/${id}`, updatedFields);
        console.log("Updating Task from React");
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
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