import React, { useState, useRef } from 'react'
import './home.scss'

import ToDoList from '../../components/to-do-list'

function Home(){
  const [items, setItems] = useState([
    {id: generateRandomString(), value: 'Groceries'},
    {id: generateRandomString(), value: 'Clean my room'},
    {id: generateRandomString(), value: 'Drinks at 5'}
  ])

  const input = useRef()

  function generateRandomString() {
    return Math.random().toString(36).substring(7);
  }

  function genItem(value) {
    return {
      id: generateRandomString(),
      value
    }
  }

  function addToDoItem(e) {
    e.preventDefault()
    if (input.current.value.length === 0) return
    const copy = [...items]
    copy.push(genItem(input.current.value))
    setItems(copy)
    input.current.value = ''
  }

  function editToDoItem(index, value) {
    const copy = [...items]
    copy[index] = genItem(value) 
    setItems(copy)
  }

  function deleteToDoItem(index) {
    const copy = [...items]
    copy.splice(index, 1)
    setItems(copy)
  }

  return(
    <div className="home">
      <h1>To do list</h1>
      <form onSubmit={addToDoItem} className="form form--inline">
        <input className="form__input" name="input" type="text" ref={input} />
        <input className="form__submit btn" type="submit" value="Add todo" />
      </form>
      <ToDoList items={items} onEditItem={editToDoItem} onDeleteItem={deleteToDoItem} />
    </div>
  )
}

export default Home