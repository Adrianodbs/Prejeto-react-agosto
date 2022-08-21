import Redes from '../../components/redes'
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
        <Redes />
      </div>
    </div>
  )
}

export default Produtos