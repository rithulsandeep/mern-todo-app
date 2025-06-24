import { getTasks } from '../api.js';
import { useState, useEffect } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTasks() {
            const data = await getTasks();
            setTasks(data);
            setLoading(false);
        }
        fetchTasks();
    }, []);

    if (loading) return <p>Loading tasks</p>;

    return (
        <>
            <h2>Tasks</h2>
            {
                tasks.length === 0 ? (<p>No tasks found</p>) : (
                    <ul>
                        {tasks.map(task => (
                            <li key={task._id}>
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.text}
                                </span>
                            </li>

                        ))}
                    </ul>
                )

            }
        </>
    )
}