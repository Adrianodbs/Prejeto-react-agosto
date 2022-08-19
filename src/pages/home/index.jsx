import React from 'react'
import './style.css'
import Header from '../../components/header'
import BemVindo from './bemvindo'
import Encomenda from "./encomenda";
import Depoimentos from './Depoimentos';
import Confeitaria from './confeitaria';

function Home() {
  return <div>
    <Header />
    <BemVindo />
    <Encomenda />
    <Confeitaria />
    <Depoimentos />
  </div>
}

export default Home
