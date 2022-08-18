import './style.css'

function Encomenda() {
  return (
    <div className='encomenda'>
      <img src='./img/encomenda.png' alt="Torta de chocolate" className='torta' />
      <div className='texto__encomenda'>
        <h3>Faça a sua</h3>
        <h2>Encomenda</h2>
        <div className='texto__detalhes'>
          <img src="./img/ads_click.png" alt="seta" />
          <p>Escolha o seu bolo</p>
        </div>
        <div className='texto__detalhes'>
          <img src="./img/call.png" alt="telefone" />
          <p>Entre em contato</p>
        </div>
      </div>
    </div>
  )
}

export default Encomenda