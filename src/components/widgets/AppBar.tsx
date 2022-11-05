import './AppBar.css'
import todoLogo from '../widgets/todoLogo.svg'

export const AppBar = () => {
  return (
    <header className={'appBar'}>
      <img src={todoLogo} alt="" />
    </header>
  )
}
