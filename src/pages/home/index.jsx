import React from 'react'
import './style.css'
import Header from '../../components/header'
import BemVindo from './bemvindo'
import Encomenda from "./encomenda";
import Depoimentos from './Depoimentos';
import Confeitaria from './confeitaria';
import Contato from './contato';
import Footer from '../../components/footer';

function Home() {
  return <div>

    <BemVindo />
    <Encomenda />
    <Confeitaria />
    <Depoimentos />
    <Contato />

  </div>
}

export default Home
