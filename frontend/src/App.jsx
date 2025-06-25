import { useState, useEffect } from 'react'
import './App.css'
import { getTasks, createTask, updateTask, deleteTask } from './api.js'
import TaskList from './components/TaskList.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <TaskList />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
