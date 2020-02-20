import React, { useState, useContext } from 'react'
import './to-do-item.scss'

import { TodoContext } from '../../contexts/to-do-context'

const ToDoItem = ({ item, index }) => {

  const { editTodo, removeTodo } = useContext(TodoContext)

  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(item.value)

  const switchEditing = () => {
    setEditing(!editing)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (value.length === 0) return
    editTodo(item.id, value)
    setEditing(false)
  }

  return(
    <li className="to-do-item">
      <span className="to-do-item__text-prefix">{index + 1}.</span>
      {!editing ? (
          <h3 className="to-do-item__text">{value}</h3>
        ) : (
          <form className="form form--inline to-do-item__form" onSubmit={handleSubmit}>
            <input className="form__input" type="text" autoFocus defaultValue={value} onChange={e => setValue(e.target.value)} />
            <input className="form__submit btn" type="submit" value="Save" />
          </form>
        )
      }
      <button className="to-do-item__button to-do-item__button--edit btn" onClick={switchEditing}>{!editing ? 'Edit' : 'Discard'}</button>
      <button className="to-do-item__button to-do-item__button--delete btn btn--inverted" onClick={() => removeTodo(item.id)}>Delete</button>
    </li>
  )
}

export default ToDoItem