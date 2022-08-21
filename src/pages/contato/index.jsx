import Redes from '../../components/redes'
import './style.css'

function Contato() {
  return (
    <div className='contato'>
      <section className='contato__info'>
        <div className="contato__info-texto">
          <p>Entre em contato com a </p>
          <h2>Villa dos Bolos</h2>
          <span>Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis. Ut lacus diam, sagittis a suscipit eget, lobortis quis dui.</span>
        </div>
        <Redes />
      </section>
    </div>
  )
}

export default Contato