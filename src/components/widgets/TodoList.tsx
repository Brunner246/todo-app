import { Todo } from '../../models/Todo'
import { TodoItem } from './TodoItem'
import './TodoList.css'

interface Props {
  todos: Todo[]
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
  input: string
  showAll: boolean
  sortAscending: boolean
}

export const TodoList = ({
  todos,
  updateTodo,
  removeTodo,
  input,
  showAll,
  sortAscending,
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
      <TodoItem todo={t} updateTodo={updateTodo} removeTodo={removeTodo} />
    ))
  }

  const todoList = renderTodoItems()

  return <div className="todo-list">{todoList}</div>
}
