import CardBolo from '../../../components/card_bolo'
import './style.css'

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

function Confeitaria() {
  const carousel = useRef()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <div className="confeitaria">
      <h4>Conheça nossa</h4>
      <h2>Confeitaria</h2>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="confeitaria__bolos"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="carousel__item">
            <CardBolo
              className="item"
              imagem="./img/bolo_1.png"
              titulo="Bolos"
            />
          </motion.div>
          <motion.div className="carousel__item">
            <CardBolo
              className="item"
              imagem="./img/bolo_2.png"
              titulo="Tortas"
            />
          </motion.div>
          <motion.div className="carousel__item">
            <CardBolo
              className="item"
              imagem="./img/bolo_3.png"
              titulo="Vulcões"
            />
          </motion.div>
          <motion.div className="carousel__item">
            {' '}
            <CardBolo
              className="item"
              imagem="./img/bolo_4.png"
              titulo="Bolo de Taça"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Confeitaria
