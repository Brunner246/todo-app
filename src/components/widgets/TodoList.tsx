import { Todo } from '../../models/Todo'
import { TodoItem } from './TodoItem'
import './TodoList.css'
import { useState } from 'react'

interface Props {
  todos: Todo[]
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
  input: string
  showAll: boolean
  sortAscending: boolean
  editTodo: (todo: Todo) => void
  editMode: boolean
}

export const TodoList = ({
  todos,
  updateTodo,
  removeTodo,
  input,
  showAll,
  sortAscending,
  editTodo,
  editMode,
}: Props) => {
  // TODO: Ugly... define filter first and then apply them, not enough time =)
  const renderTodoItems = () => {
    // Filter for text input
    let filteredTodos = input
      ? [...todos].filter(t =>
          t.text.toLowerCase().includes(input.toLowerCase())
        )
      : todos

    // Handle show all checkbox
    filteredTodos = showAll ? filteredTodos : filteredTodos.filter(t => !t.done)

    // Sort according to done, importance and text
    filteredTodos = filteredTodos.sort(
      (t1, t2) =>
        Number(t1.done) - Number(t2.done) ||
        t2.importance - t1.importance ||
        t1.text.localeCompare(t2.text)
    )

    // Sort descending if checked.
    if (!sortAscending) {
      filteredTodos = filteredTodos.reverse()
    }

    // Sort and render
    return filteredTodos.map(t => (
      <TodoItem
        todo={t}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    ))
  }

  const [todoId, setTodoId] = useState<string>('')
  const handleSubmit = () => {
    console.log('handling submit')
    todos.map(t => {
      if (todoId === t.id) {
        return { ...t, text: 'helllllll' }
      }
      return (
        <TodoItem
          todo={t}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      )
    })
  }

  const handleChange = () => {
    console.log('change')
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label"></label>
        <input type="text" value={'hello world'} onChange={handleChange} />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => {
            // setNewName(props.name);
            // setEditing(false);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => {
            // props.editTask(props.id, newName);
            // setEditing(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  )

  const todoList = renderTodoItems()

  return editMode ? (
    editingTemplate
  ) : (
    <div className="todo-list">{todoList}</div>
  )
}
