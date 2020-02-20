import React from 'react'
import './to-do-list.scss'

import ToDoItem from '../to-do-item'

function ToDoList({ items, onEditItem, onDeleteItem }){
  
  function renderItem(item, index) {
    return(
      <ToDoItem key={item.id} item={item} index={index} onEdit={onEditItem} onDelete={onDeleteItem} />
    )
  }

  return(
    <ul className="to-do-list">
      {items.map(renderItem)}
    </ul>
  )
}

export default ToDoList