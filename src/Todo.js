import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {

  return(
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
        {todo.text}
        <div className="ctrl">
          <button className="complete" onClick={() => completeTodo(index)}>👍</button>
          <button className="close" onClick={() => removeTodo(index)}>&times;</button>
        </div>
    </div> 
  )

}


function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input" 
                value={value}
                placeholder="Add Todo and Hit Enter 👍..."
                onChange={e => setValue(e.target.value)} 
            />
        </form>

    )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Lear about React',
      isCompleted: false
    },
    {
      text: 'Buid Cool TODO App',
      isCompleted: false
    },
    {
      text: 'Shit',
      isCompleted: false
    }
  ])

    const addTodo = text => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

  return (
    <div className="app">
      <div class="logo">
        Todo List
      </div>
      <div className="todo-list">

        {todos.map(( todo, index ) => (

            <Todo 
                key={index} 
                index={index} 
                todo={todo} 
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />

        ))}

        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  )
}
export default App