import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  return(
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" exact to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav