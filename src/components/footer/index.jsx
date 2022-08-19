import './style.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__img">
        <img src="./img/logo.png" alt="logo" />
        <div className="footer__img-redes">
          <img src="./img/ig_rosa.png" alt="Instagram" />
          <img src="./img/wp_rosa.png" alt="Whatsapp" />
        </div>
      </div>
      <div className="footer__local">
        <h4>Salvador</h4>
        <p>Avenida Cardeal da Silva,<br/> 
          447, Federação<br/>
          CEP: 40231-250</p>
      </div>
      <div className="footer__categorias">
        <h4>Categorias</h4>
        <ul>
          <li>Bolos</li>
          <li>Tortas</li>
          <li>Vulcões</li>
          <li>Bolo de taça</li>
        </ul>
      </div>
      <div className="footer__contato">
        <h4>Contato</h4>
        <ul>
          <li>Faça sua encomenda</li>
          <li>Seja um franqueado</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer