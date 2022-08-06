import React from 'react'


import './style.css'

function Header() {
  return (
    <div className='header'>
      <img src='/img/logo.png' alt="Logo" className='logo' />
      <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}

export default Header