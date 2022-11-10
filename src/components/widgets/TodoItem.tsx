import { Fragment } from 'react'
import { Todo } from '../../models/Todo'
import { Button } from '../controls/Button'
import { Checkbox } from '../controls/Checkbox'
import { Priority } from './Priority'
import { Text } from './Text'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
}

export const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  return (
    <Fragment key={todo.id}>
      <Checkbox
        checkboxType="done"
        onChange={() => updateTodo({ ...todo, done: !todo.done })}
        checked={todo.done}
      ></Checkbox>
      <Priority todo={todo} updateTodo={updateTodo}></Priority>
      <Text checked={todo.done} todo={todo}></Text>
      <Button onClick={() => removeTodo(todo)} buttonType="remove">
        ⛔
      </Button>
    </Fragment>
  )
}
