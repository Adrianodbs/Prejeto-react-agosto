import { useState } from 'react'
import CardProdutos from '../../../components/card_produtos'
import './style.css'

function MenuProdutos() {

  const [produto, setProduto] = useState(1)

  const action = (index) =>{

    setProduto(index)
  }
  return (
    <div className='menu-produtos'>
      <ul>
        <li className={`${produto===1 ? 'produto-ativo' : ''}`} onClick={()=> action(1)}>Bolos</li>
        <li className={`${produto===2 ? 'produto-ativo' : ''}`} onClick={()=> action(2)}>Tortas</li>
        <li className={`${produto===3 ? 'produto-ativo' : ''}`} onClick={()=> action(3)}>Vulcões</li>
        <li className={`${produto===4 ? 'produto-ativo' : ''}`} onClick={()=> action(4)}>Bolo de Taça</li>
      </ul>
      <div className= {`${produto===1 ? 'menu-produtos__bolos conteudo_produto-ativo' : 'menu-produtos__bolos conteudo_produto-escondido'}`}>
        <CardProdutos imagem='./img/produtos/bolos/1.png' titulo='Bolo Mágico' /> 
        <CardProdutos imagem='./img/produtos/bolos/2.png' titulo='Brigadeiro' /> 
        <CardProdutos imagem='./img/produtos/bolos/3.png' titulo='Carimã' /> 
        <CardProdutos imagem='./img/produtos/bolos/4.png' titulo='Bolo Mesclado' /> 
        <CardProdutos imagem='./img/produtos/bolos/5.png' titulo='Aipim' /> 
        <CardProdutos imagem='./img/produtos/bolos/6.png' titulo='Maracujá' /> 
      </div>

      <div className= {`${produto===2 ? 'menu-produtos__bolos conteudo_produto-ativo' : 'menu-produtos__bolos conteudo_produto-escondido'}`}>
        <CardProdutos imagem='./img/produtos/tortas/1.png' titulo='White Cake' /> 
        <CardProdutos imagem='./img/produtos/tortas/2.png' titulo='Naked' /> 
        <CardProdutos imagem='./img/produtos/tortas/3.png' titulo='Confeitadas' /> 
        <CardProdutos imagem='./img/produtos/tortas/4.png' titulo='Torta Baby' /> 
        <CardProdutos imagem='./img/produtos/tortas/5.png' titulo='Celebrações' /> 
        <CardProdutos imagem='./img/produtos/tortas/6.png' titulo='Torta Rustica' /> 
      </div>

      <div className= {`${produto===3 ? 'menu-produtos__bolos conteudo_produto-ativo' : 'menu-produtos__bolos conteudo_produto-escondido'}`}>
        <CardProdutos imagem='./img/produtos/vulcoes/1.png' titulo='Cenoura com Chocolate' /> 
        <CardProdutos imagem='./img/produtos/vulcoes/2.png' titulo='Amendoin' /> 
        <CardProdutos imagem='./img/produtos/vulcoes/3.png' titulo='Red Velvet' /> 
        <CardProdutos imagem='./img/produtos/vulcoes/4.png' titulo='Doce de Leite' /> 
        <CardProdutos imagem='./img/produtos/vulcoes/5.png' titulo='Ninho' /> 
        <CardProdutos imagem='./img/produtos/vulcoes/6.png' titulo='Brigadeiro' /> 
      </div>

      <div className= {`${produto===4 ? 'menu-produtos__bolos conteudo_produto-ativo' : 'menu-produtos__bolos conteudo_produto-escondido'}`}>
        <CardProdutos imagem='./img/produtos/bolo_taca/1.png' titulo='Red Velvet' /> 
        <CardProdutos imagem='./img/produtos/bolo_taca/2.png' titulo='Churros' /> 
      </div>
     
    </div>
  )
}

export default MenuProdutos