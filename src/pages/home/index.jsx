import React from 'react'
import './style.css'
import Header from '../../components/header'
import BemVindo from './bemvindo'
import Encomenda from "./encomenda";
import Depoimentos from './Depoimentos';

function Home() {
  return <div>
    <Header />
    <BemVindo />
    <Encomenda />
    <Depoimentos />
  </div>
}

export default Home
