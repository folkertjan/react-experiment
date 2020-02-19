import React, { createRef } from 'react'
import './home.scss'

import ToDoList from '../../components/to-do-list'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {id: this.generateRandomString(), value: 'Groceries'},
        {id: this.generateRandomString(), value: 'Clean my room'},
        {id: this.generateRandomString(), value: 'Drinks at 5'},
      ]
    }

    this.input = createRef()

    this.genItem = this.genItem.bind(this)
    this.addToDoItem = this.addToDoItem.bind(this)
    this.editToDoItem = this.editToDoItem.bind(this)
    this.deleteToDoItem = this.deleteToDoItem.bind(this)
  }

  generateRandomString() {
    return Math.random().toString(36).substring(7);
  }

  genItem(value) {
    return {
      id: this.generateRandomString(),
      value
    }
  }

  addToDoItem(e) {
    e.preventDefault()
    const items = this.state.items 
    items.push(this.genItem(this.input.current.value))
    this.setState({ items })
    this.input.current.value = ''
  }

  editToDoItem(index, value) {
    const items = this.state.items 
    items[index] = this.genItem(value) 
    this.setState({ items })
  }

  deleteToDoItem(index) {
    const items = this.state.items
    items.splice(index, 1)
    this.setState({ items })
  }

  render(){
    return(
      <div className="home">
        <h1>To do list</h1>
        <form onSubmit={this.addToDoItem} className="form form--inline">
          <input className="form__input" name="input" type="text" ref={this.input} />
          <input className="form__submit btn" type="submit" value="Add todo" />
        </form>
        <ToDoList items={this.state.items} onEditItem={this.editToDoItem} onDeleteItem={this.deleteToDoItem} />
      </div>
    )
  }
}

export default Home