import './TodoItemText.css'
import { Todo } from '../../models/Todo'

interface Props {
  checked: boolean
  todo: Todo
}

export const Text = ({ checked, todo }: Props) => {
  if (!checked) {
    return <div className={`todo-item-text`}>{todo.text}</div>
  }
  return <div className={`todo-item-text ${'cross-through'}`}>{todo.text}</div>
}
