import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './global.scss'

import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'

function App(){
  return(
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))