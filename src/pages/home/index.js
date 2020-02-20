import React, { useState, useEffect, useContext } from 'react'
import './home.scss'

import { TodoContext } from '../../contexts/to-do-context'

import ToDoList from '../../components/to-do-list'

const Home = () =>{
  const { todos, addTodo } = useContext(TodoContext)

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('todos: ', todos)
  }, [todos])

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return(
    <main className="page page--home">
      <div className="container">
        <h2 className="page__title">To do list</h2>
        <form onSubmit={handleSubmit} className="form form--inline">
          <input className="form__input" name="input" type="text" value={value} onChange={e => setValue(e.target.value)} />
          <input className="form__submit btn" type="submit" value="Add todo" />
        </form>
        <ToDoList items={todos}/>
      </div>
    </main>
  )
}

export default Home