import CardBolo from '../../../components/card_bolo'
import './style.css'

import { useState, useEffect, useRef } from 'react'

function Confeitaria() {
  return (
    <div className="confeitaria">
      <h4>Conheça nossa</h4>
      <h2>Confeitaria</h2>
      <div className="confeitaria__produtos">
        <CardBolo className="item" imagem="./img/bolo_1.png" titulo="Bolos" />
        <CardBolo className="item" imagem="./img/bolo_2.png" titulo="Tortas" />
        <CardBolo
          className="item"
          imagem="./img/bolo_3.png"
          titulo="Vulcões"
        />{' '}
        <CardBolo
          className="item"
          imagem="./img/bolo_4.png"
          titulo="Bolo de Taça"
        />
      </div>
    </div>
  )
}

export default Confeitaria
