import React from 'react'
import { Link } from 'react-router-dom'


import './style.css'

function Header() {
  return (
    <div className='header'>
      <img src='/img/logo.png' alt="Logo" className='logo' />
      <ul>
        <li>
          <Link to='/'>Início</Link>
        </li>
        <li>
          <Link to='/produtos'>Produtos</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header