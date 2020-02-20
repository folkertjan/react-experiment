import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './global.scss'

import TodoContextProvider from './contexts/to-do-context'

import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'

const App = () => {
  return(
    <Router>
      <Header />
      <TodoContextProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </TodoContextProvider>
    </Router>
  )
}

const root = document.getElementById('app')

ReactDOM.render(<App />, root)