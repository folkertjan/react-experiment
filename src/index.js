import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'

import Home from './pages/home'

class App extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))