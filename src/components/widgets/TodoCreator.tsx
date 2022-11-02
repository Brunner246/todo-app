import { Button } from 'components/controls/Button'
import { Checkbox } from 'components/controls/Checkbox'
import { Input } from 'components/controls/Input'
import { createTodo, Todo } from 'models/Todo'
import { KeyboardEvent } from 'react'
import './TodoCreator.css'

interface Props {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  input: string
  setInput: (text: string) => void
  showAll: boolean
  setShowAll: (state: boolean) => void
  setSortAscending: (state: boolean) => void
}

export const TodoCreator = ({
  todos,
  addTodo,
  input,
  setInput,
  showAll,
  setShowAll,
  setSortAscending,
}: Props) => {
  const createAndAddTodo = () => {
    if (input === '') return
    addTodo(createTodo(input))
    setInput('')
  }

  const handleKeyboardEvent = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      createAndAddTodo()
    }
  }

  return (
    <div className="todo-creator" onKeyDown={handleKeyboardEvent}>
      <div className="todo-creator-input">
        <Input input={input} setInput={setInput}></Input>
      </div>
      <div className="todo-creator-add">
        <Button onClick={createAndAddTodo} buttonType="add">
          Add
        </Button>
      </div>
      <div className="todo-creator-options">
        <Checkbox
          checkboxType="option"
          onChange={() => {
            setShowAll(!showAll)
          }}
          checked={showAll}
        >
          Show all
        </Checkbox>
      </div>
      <div className="todo-creator-up">
        <Button onClick={() => setSortAscending(false)} buttonType="up">
          &#8593;
        </Button>
      </div>
      <div className="todo-creator-down">
        <Button onClick={() => setSortAscending(true)} buttonType="down">
          &#8595;
        </Button>
      </div>
    </div>
  )
}
