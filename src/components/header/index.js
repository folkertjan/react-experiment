import React from 'react'

import './header.scss'

import Nav from '../nav'

function Header() {
  return(
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">React experiment</h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header