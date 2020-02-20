import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {id: uuid(), value: 'Groceries'},
    {id: uuid(), value: 'Clean my room'},
    {id: uuid(), value: 'Drinks at 5'}
  ])

  const addTodo = value => {
    const todo = {
      id: uuid(),
      value
    }
    setTodos([...todos, todo])
  }

  const editTodo = (id, value) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo 
      return {id, value}
    }))
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, removeTodo }}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoContextProvider