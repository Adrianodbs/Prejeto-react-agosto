import CardProdutos from '../../../components/card_produtos'
import './style.css'

function MenuProdutos() {
  return (
    <div className='menu-produtos'>
      <ul>
        <li>Bolos</li>
        <li>Tortas</li>
        <li>Vulcões</li>
        <li>Bolo de Taça</li>
      </ul>
      <div className= 'menu-produtos__bolos'>
        <CardProdutos imagem='./img/produtos/bolos/1.png' titulo='Bolo Mágico' /> 
        <CardProdutos imagem='./img/produtos/bolos/2.png' titulo='Brigadeiro' /> 
        <CardProdutos imagem='./img/produtos/bolos/3.png' titulo='Carimã' /> 
        <CardProdutos imagem='./img/produtos/bolos/4.png' titulo='Bolo Mesclado' /> 
        <CardProdutos imagem='./img/produtos/bolos/5.png' titulo='Aipim' /> 
        <CardProdutos imagem='./img/produtos/bolos/6.png' titulo='Maracujá' /> 
      </div>
     
    </div>
  )
}

export default MenuProdutos