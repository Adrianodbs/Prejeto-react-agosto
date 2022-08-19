import './style.css'

import Botao from '../../../components/Botao'

function Contato() {
  return (
    <div className='contato'>
      <h4>Entre em contato e</h4>
      <h2>Faça sua encomenda</h2>
      <div className="contato__info">
        <div className="contato__consumidor">
          <span>Consumidor</span>
          <div className="contato__redes">
            <img src="./img/logo_ig.png" alt="Instagram" />
            <p>@villadosbolos</p>
          </div>
          <div className="contato__redes">
            <img src="./img/logo_wp.png" alt="Whatsapp" />
            <p>(71) 99123-4567</p>
          </div>
        </div>
        <div className="contato__franqueado">
          <span>Seja um fraqueado</span>
          <p>Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, . Quisque eleifend, odio eu tristique rutrum, nisi diam gravida justo,.</p>
          <Botao>Quero ser um franqueado</Botao>
        </div>
      </div>
    </div>
  )
}

export default Contato