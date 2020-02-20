import React, { useContext } from 'react'
import './about.scss'

import { TodoContext } from '../../contexts/to-do-context'

const About = () => {
  const { todos } = useContext(TodoContext)

  return(
    <main className="page page--about">
      <div className="container">
        <h2 className="page__title">About</h2>
        <p>You have {todos.length} {todos.length === 1 ? 'todo' : 'todos'}.</p>
      </div>
    </main>
  )
}

export default About