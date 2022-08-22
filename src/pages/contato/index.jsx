import Redes from '../../components/redes'
import './style.css'
import Botao from '../../components/Botao'

function Contato() {
  return (
    <div className='contato-page'>
      <section className='contato__info'>
        <div className="contato__info-texto">
          <p>Entre em contato com a </p>
          <h2>Villa dos Bolos</h2>
          <h5 className='texto-contato'>Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis. Ut lacus diam, sagittis a suscipit eget, lobortis quis dui.</h5>
        </div>
        <Redes />
      </section>
      <section className="contato__franqueado">
        <h2>Seja um franqueado</h2>
        <span>A Villa dos Bolos tem uma maravilhosa rede de franquias</span>
        <Botao>Quero ser um franqueado</Botao>
      </section>
    </div>
  )
}

export default Contato