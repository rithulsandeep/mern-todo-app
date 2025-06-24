import { useState, useEffect } from 'react'
import './App.css'
import { getTasks, createTask, updateTask, deleteTask } from './api.js'
import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <>
      <TaskList />

    </>
  )
}

export default App
