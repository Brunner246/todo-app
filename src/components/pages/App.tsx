import './App.css'

function toggleMenu() {
  const menu = document.getElementById('menu')
  if (menu !== null) {
    if (menu.style.width === '0px') {
      menu.style.width = '170px'
    } else {
      menu.style.width = '0px'
    }
  }
}

export const App = () => {
  return (
    <div className="container shadow">
      <div className="header shadow">
        Todo App
        <span className="toggle clickable" onClick={toggleMenu}>
          &#8801;
        </span>
      </div>
      <div className="main">
        <div className="todo create">
          <input className="input" type="text" placeholder="Enter a task..." />
          <input className="button" type="button" value="Add" />
          <div className="options">
            <span className="option">
              <input
                type="checkbox"
                id="show-open"
                name="showOpen"
                value="false"
              />
              <label>Open</label>
            </span>
            <span className="option">
              <input
                type="checkbox"
                id="show-done"
                name="showDone"
                value="false"
              />
              <label>Done</label>
            </span>
            <span className="option">
              <input
                type="checkbox"
                id="show-all"
                name="showAll"
                value="false"
              />
              <label>All</label>
            </span>
          </div>
        </div>
        <div className="todo list">
          <div className="todo item">
            <input type="checkbox" />
            <div className="priority">
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
            </div>
            <span>My first task</span>
            <input className="button" type="button" value="Delete" />
          </div>
          <div className="todo item">
            <input type="checkbox" />
            <div className="priority">
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
            </div>
            <span>My second task</span>
            <input className="button" type="button" value="Delete" />
          </div>
          <div className="todo item">
            <input type="checkbox" />
            <div className="priority">
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
              <span className="clickable">&#128498;</span>
            </div>
            <span>My third task</span>
            <input className="button" type="button" value="Delete" />
          </div>
        </div>
      </div>
      <div id="menu" className="menu">
        <div className="settings">
          <div>Account</div>
          <hr />
          <input className="button" type="button" value="Logout" />
          <br />
          <br />
          <div>Settings</div>
          <hr />
          <input className="button" type="button" value="Import" />
          <input className="button" type="button" value="Export" />
        </div>
      </div>
      <div className="footer">© Group 1</div>
    </div>
  )
}
