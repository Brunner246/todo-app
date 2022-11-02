import './Input.css'

export type InputState = 'empty' | 'valid' | 'invalid'

interface Props {
  inputState: InputState
  input: string
  setInput: (text: string) => void
}

export const Input = ({ inputState, input, setInput }: Props) => {
  return (
    <input
      className={`input ${inputState}`}
      value={input}
      onChange={e => {
        setInput(e.target.value)
      }}
    />
  )
}
