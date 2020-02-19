import React from 'react'
import './to-do-list.scss'

import ToDoItem from '../to-do-item'

class ToDoList extends React.Component{
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.renderItems = this.renderItems.bind(this)
  }
  renderItem(item, index) {
    return(
      <ToDoItem key={item.id} value={item.value} index={index} onDelete={this.props.onDeleteItem} />
    )
  }
  renderItems() {
    return this.props.items.map(this.renderItem)
  }
  render(){
    return(
      <ul className="to-do-list">
        {this.renderItems()}
      </ul>
    )
  }
}

export default ToDoList