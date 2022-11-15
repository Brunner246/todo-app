import './TodoItemText.css'
import { Todo } from '../../models/Todo'

interface Props {
  checked: boolean
  todo: Todo
}

export const TodoItemText = ({ checked, todo }: Props) => {
  return (
    <div
      className={checked ? 'todo-item-text' : 'todo-item-text cross-through'}
    >
      {todo.text}
    </div>
  )
}
