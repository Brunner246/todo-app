import todoLogo from '../widgets/todoLogo.svg'
import './AppBar.css'

export const AppBar = () => {
  return (
    <header className={'appBar'}>
      <img src={todoLogo} alt="" />
    </header>
  )
}
