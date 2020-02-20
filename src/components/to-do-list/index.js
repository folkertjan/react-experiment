import React from 'react'
import './to-do-list.scss'

import ToDoItem from '../to-do-item'

const ToDoList = ({ items }) =>{
  
  const renderItem = (item, index) => <ToDoItem key={item.id} item={item} index={index} />

  return(
    <ul className="to-do-list">
      {items.map(renderItem)}
    </ul>
  )
}

export default ToDoList