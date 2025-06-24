import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes.mjs';
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = 5000

mongoose.connect("mongodb://localhost/todo-app")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

app.use(cors())

app.get('/', (req, res) => {
    res.send("API is running");
});

app.use(express.json())

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

