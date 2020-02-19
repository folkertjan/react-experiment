import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import ToDoList from './components/to-do-list'

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1>To-do app</h1>
        <ToDoList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))