import './style.css'

function CardProdutos({imagem, titulo}) {
  return (
    <div className='card-produtos'>
      <img src={imagem} alt={titulo} className='card-produtos__img' />
      <div className="card__produtos-texto">
        <h3>{titulo}</h3>
        <a href="#">Saiba mais <img src="./img/seta_direita.png" alt="Seta" /></a>
      </div>
    </div>
  )
}

export default CardProdutos