import './App.css'

import { AppBar } from '../widgets/AppBar'
import { TodoCreator } from '../widgets/TodoCreator'
import { TodoList } from '../widgets/TodoList'
import { Footer } from '../widgets/Footer'

import { Todo } from '../../models/Todo'
import { useState } from 'react'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Hello', done: false, importance: 2 },
    { id: '2', text: 'World', done: false, importance: 1 },
  ])
  const [input, setInput] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(false)
  const [sortAscending, setSortAscending] = useState<boolean>(true)
  const [todoItem, setTodoItem] = useState<Todo>()
  const [editMode, setEditMode] = useState<boolean>(false)
  const [todoId, setTodoId] = useState<string>('')

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
    return
  }

  const removeTodo = (todo: Todo) => {
    setTodos(todos.filter(current => current.id !== todo.id))
  }

  const updateTodo = (todo: Todo) => {
    setTodos(
      todos.map(current => {
        if (current.id === todo.id) {
          return { ...todo }
        }
        return current
      })
    )
  }

  const editTask = (todo: Todo) => {
    const updatedTasks = todos.map(task => {
      if (todo.id === task.id) {
        setEditMode(true)
        setTodoId(task.id)
        return { ...task } // , name: 'hans'
      }
      setTodoItem(task)
      return task
    })
    setTodos(updatedTasks)
  }

  return (
    <div className="app">
      <AppBar />
      <div className="page">
        <TodoCreator
          todos={todos}
          addTodo={addTodo}
          input={input}
          setInput={setInput}
          showAll={showAll}
          setShowAll={setShowAll}
          setSortAscending={setSortAscending}
        />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          input={input}
          showAll={showAll}
          sortAscending={sortAscending}
          editTodo={editTask}
          editMode={editMode}
        />
      </div>
      <Footer />
    </div>
  )
}
