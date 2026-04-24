import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender Hooks', completed: false },
  ])
  const [taskInput, setTaskInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedText = taskInput.trim()

    if (!trimmedText) return

    const newTask = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setTaskInput('')
  }

  function removeTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  function toggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <main className="todo-app">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'concluida' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {' '}
              {task.text}
            </label>
            <button type="button" onClick={() => removeTask(task.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
