import { ReactNode } from 'react'
import './Symbol.css'

interface Props {
  onClick: () => void
  checked: boolean
  children?: ReactNode
}

export const Symbol = ({ onClick, checked, children }: Props) => {
  return (
    <div className={`symbol${checked ? ' checked' : ''}`} onClick={onClick}>
      {children}
    </div>
  )
}
