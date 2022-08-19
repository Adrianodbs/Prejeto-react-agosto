import './style.css'

import React from 'react'

function CardBolo({imagem, titulo}) {
  return (
    <div className='card-bolo'>
      <img src={imagem} alt={titulo} className="card-bolo__imagem" />
      <span className='card-bolo__titulo'>{titulo}</span>
      <p>Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, lacinia sit amet faucibus eu, semper a ante. </p>
      <div className="card__link">
        <a href='#'>Saiba mais</a>
        <img src="./img/seta_direita.png" alt="seta" />
      </div>
    </div>
  )
}

export default CardBolo