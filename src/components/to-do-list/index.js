import React from 'react'
import './to-do-list.scss'

import ToDoItem from '../to-do-item'

function ToDoList(props){
  function renderItem(item, index) {
    return(
      <ToDoItem key={item.id} value={item.value} index={index} onEdit={props.onEditItem} onDelete={props.onDeleteItem} />
    )
  }

  return(
    <ul className="to-do-list">
      {props.items.map(renderItem)}
    </ul>
  )
}

export default ToDoList