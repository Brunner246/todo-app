import { parseImportance } from '../../models/Importance'
import { Todo } from '../../models/Todo'
import { Symbol } from '../controls/Symbol'
import './Priority.css'

interface Props {
  todo: Todo
  updateTodo: (todo: Todo) => void
}

export const Priority = ({ todo, updateTodo }: Props) => {
  const updatePriority = (id: number) => {
    updateTodo({ ...todo, importance: parseImportance(id) })
  }

  return (
    <div className="priority">
      <Symbol
        checked={3 <= todo.importance}
        onClick={() => {
          updatePriority(3)
        }}
      >
        ↯
      </Symbol>
      <Symbol
        checked={2 <= todo.importance}
        onClick={() => {
          updatePriority(2)
        }}
      >
        ↯
      </Symbol>
      <Symbol
        checked={1 <= todo.importance}
        onClick={() => {
          updatePriority(1)
        }}
      >
        ↯
      </Symbol>
    </div>
  )
}
