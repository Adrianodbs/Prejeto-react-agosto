import CardBolo from '../../../components/card_bolo'
import './style.css'

function Confeitaria() {
  return (
    <div className='confeitaria'>
      <h4>Conheça nossa</h4>
      <h2>Confeitaria</h2>
      <div className="confeitaria__bolos">
        <CardBolo imagem='./img/bolo_1.png' titulo='Bolos' />
        <CardBolo imagem='./img/bolo_2.png' titulo='Tortas' />
        <CardBolo imagem='./img/bolo_3.png' titulo='Vulcões' />
        <CardBolo imagem='./img/bolo_4.png' titulo='Bolo de Taça' />
      </div>
    </div>
  )
}

export default Confeitaria