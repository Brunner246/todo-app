import { useState } from 'react'
import { Todo } from '../../models/Todo'
import { AppBar } from '../widgets/AppBar'
import { Footer } from '../widgets/Footer'
import { TodoCreator } from '../widgets/TodoCreator'
import { TodoList } from '../widgets/TodoList'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(false)
  const [sortAscending, setSortAscending] = useState<boolean>(true)

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
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
        />
      </div>
      <Footer />
    </div>
  )
}
