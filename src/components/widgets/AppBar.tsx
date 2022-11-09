import Banner from './AppBar.svg'
import './AppBar.css'

export const AppBar = () => {
  return (
    <header className={'appBar'}>
      <img src={Banner} alt="" />
    </header>
  )
}
