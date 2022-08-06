import React from 'react'
import './style.css'

function Botao(props) {
  return (
    <button>{props.children}</button>
  )
}

export default Botao