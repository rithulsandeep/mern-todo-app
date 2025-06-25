import { getTasks, updateTask, deleteTask, createTask } from '../api.js';
import { useState, useEffect } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");

    useEffect(() => {
        async function fetchTasks() {
            const data = await getTasks();
            setTasks(data);
            setLoading(false);
        }
        fetchTasks();
    }, []);

    const handleToggle = async (id, completed) => {
        try {
            await updateTask(id, { completed: !completed });

            // Update local state immediately
            const updatedTasks = tasks.map(task =>
                task._id === id ? { ...task, completed: !completed } : task
            );
            setTasks(updatedTasks);
        } catch (err) {
            console.error("Failed to update task", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const updatedTasks = tasks.filter(task => task._id !== id);
            const response = await deleteTask(id);
            setTasks(updatedTasks);
        } catch (err) {
            console.error("Failed to delete task", err);
        }
    }


    const handleCreate = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        try {
            const newTask = await createTask({ text: input });
            setTasks([...tasks, newTask]);
            setInput("");
        } catch (err) {
            console.error("Failed to create task:", err);
        }
    };

    if (loading) return <p>Loading tasks...</p>;

    return (
        <>
            <h2>Tasks</h2>
            {
                tasks.length === 0 ? (
                    <p>No tasks found</p>
                ) : (
                    <div>
                        <ul>
                            {tasks.map(task => (
                                <li key={task._id}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleToggle(task._id, task.completed)}
                                        />
                                        <span style={{
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            opacity: task.completed ? 0.7 : 1
                                        }}>
                                            {task.text}
                                        </span>
                                        <button
                                            onClick={() => handleDelete(task._id)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: '4px',
                                                borderRadius: '4px',
                                                transition: 'all 0.2s',
                                                color: '#ff4444',
                                                fontSize: '16px',
                                                marginLeft: 'auto', // Pushes button to the right
                                                ':hover': {
                                                    backgroundColor: '#c30010', // Light red background on hover
                                                    transform: 'scale(2.1)'
                                                },
                                                ':active': {
                                                    transform: 'scale(0.95)'
                                                }
                                            }}
                                        >
                                            🗑️
                                        </button>
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={handleCreate} style={{ marginTop: '20px', display: 'flex' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Task"
                                style={{
                                    flexGrow: 1,
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    border: '2px solid #ddd',
                                    borderRadius: '30px',
                                    outline: 'none',
                                    transition: 'all 0.3s',
                                    minWidth: '300px',
                                    ':focus': {
                                        borderColor: '#646cff',
                                        boxShadow: '0 0 0 2px rgba(100, 108, 255, 0.2)'
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    marginLeft: '10px',
                                    padding: '12px 24px',
                                    background: '#646cff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    transition: 'all 0.2s',
                                    ':hover': {
                                        background: '#535bf2',
                                        transform: 'translateY(-1px)'
                                    }
                                }}
                            >
                                Add Task
                            </button>
                        </form>
                    </div>
                )
            }
        </>
    );
}
