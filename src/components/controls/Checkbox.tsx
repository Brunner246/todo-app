import { ReactNode } from 'react'
import './Checkbox.css'

type CheckboxType = 'option' | 'done'

interface Props {
  onChange: () => void
  checkboxType: CheckboxType
  checked: boolean
  children?: ReactNode
}

export const Checkbox = ({
  onChange,
  checkboxType,
  checked,
  children,
}: Props) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={checkboxType}
        onChange={onChange}
        checked={checked}
      ></input>
      <div className="checkbox-label">{children}</div>
    </div>
  )
}
