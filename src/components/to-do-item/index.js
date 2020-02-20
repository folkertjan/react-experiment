import React, { useState } from 'react'
import './to-do-item.scss'

function ToDoItem({ item, index, onEdit, onDelete }) {

  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(item.value)

  function switchEditing() {
    setEditing(!editing)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (value.length === 0) return
    onEdit(item.id, value)
    setEditing(false)
  }

  function deleteToDoItem() {
    onDelete(item.id)
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
      <button className="to-do-item__button to-do-item__button--delete btn btn--inverted" onClick={deleteToDoItem}>Delete</button>
    </li>
  )
}

export default ToDoItem