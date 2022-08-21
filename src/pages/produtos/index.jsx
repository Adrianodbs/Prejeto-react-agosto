import MenuProdutos from './menu'
import './style.css'

function Produtos() {
  return (
    <div className='produtos'>
      <MenuProdutos />
      <div className="produtos__info">
        <div className="produtos__info-texto">
          <p>Faça sua </p>
          <h2>Encomenda</h2>
        </div>
        <div className="produtos__info-redes">
          <div className="produtos__info-redes--contato">
            <img src="./img/logo_ig.png" alt="Instagram" />
            <p>@villadosbolos</p>
          </div>
          <div className="produtos__info-redes--contato">
            <img src="./img/logo_wp.png" alt="Whatsapp" />
            <p>(71) 99123-4567</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produtos