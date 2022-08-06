import React from 'react'
import Botao from '../../../components/Botao'
import './style.css'

function BemVindo() {
  return (
    <div className='bemvindo'>
      <div className='texto'>
        <h3>Bem-vindo à</h3>
        <h1>Villa dos Bolos</h1>
        <p>Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis.</p>
        <Botao>Conheça nossos produtos</Botao>
      </div>
      <div className="imagem">
        <img src="./img/bolosorvete.png" alt="Bolo com sorvete em cima" />  
      </div> 
    </div>
    
  )
}

export default BemVindo