import './TodoItem.css'

import { Todo } from '../../models/Todo'
import { Button } from 'components/controls/Button'
import { CheckboxDone } from 'components/controls/CheckboxDone'
import { Priority } from './Priority'
import { Fragment } from 'react'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
}

export const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  return (
    <Fragment key={todo.id}>
      <CheckboxDone todo={todo} updateTodo={updateTodo} />
      <Priority todo={todo} updateTodo={updateTodo}></Priority>
      <div className="todo-item-text">{todo.text}</div>
      <Button onClick={() => removeTodo(todo)} buttonType="remove">
        Remove
      </Button>
    </Fragment>
  )
}
