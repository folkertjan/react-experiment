import React, { useState, createRef } from 'react'
import './to-do-item.scss'

function ToDoItem(props) {

  const [editing, setEditing] = useState(false)

  const input = createRef()

  function switchEditing() {
    setEditing(!editing)
  }

  function editToDoItem(e) {
    e.preventDefault()
    if (input.current.value.length === 0) return
    props.onEdit(props.index, input.current.value)
    setEditing(false)
  }

  function deleteToDoItem() {
    props.onDelete(props.index)
  }

  
  return(
    <li className="to-do-item">
      <span className="to-do-item__text-prefix">{props.index + 1}.</span>
      {!editing ? (
          <h3 className="to-do-item__text">{props.value}</h3>
        ) : (
          <form className="form form--inline to-do-item__form" onSubmit={editToDoItem}>
            <input className="form__input" type="text" autoFocus defaultValue={props.value} ref={input} />
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