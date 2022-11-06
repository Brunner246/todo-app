import { Todo } from 'models/Todo'
import './TodoItem.css'
import { useState } from 'react'

interface Props {
  todo: Todo
  editTodo: (todo: Todo) => void
}

export const TodoText = ({ todo, editTodo }: Props) => {
  const [text, setText] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(false)

  const update = () => {
    if (editMode) {
      setText('hello')
      editTodo({ ...todo, text: text })
      return
    }
    setText(text)
  }
  update()
  setEditMode(false)

  return <div className="todo-item-text">{text}</div>
}
