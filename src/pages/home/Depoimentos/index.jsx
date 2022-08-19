import './style.css'

function Depoimentos() {
  return (
    <div className='depoimentos'>
      <h3>Veja os depoimentos dos</h3>
      <h2>Nossos clientes</h2>
      <div className='depoimentos__content'>
        <img src="./img/cristina.png" alt="" />
        <div className="depoimentos__texto">
          <h2>Cristina Alves</h2>
          <h4>Naked de Brigadeiro</h4>
          <p>Donec sit amet mi a lorem gravida sollicitudin eget nec nisl. Morbi et malesuada lectus. Donec ornare quis elit non bibendum. In vitae lacus velit. Ut ut turpis vitae nibh fringilla finibus a at massa. Ut quis bibendum nibh, tincidunt mattis diam. In ut ligula eu augue hendrerit laoreet id et ligula.</p>
        </div>
      </div>
    </div>
  )
}

export default Depoimentos