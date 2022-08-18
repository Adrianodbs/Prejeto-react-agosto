import React from 'react'
import './style.css'
import Header from '../../components/header'
import BemVindo from './bemvindo'
import Encomenda from "./encomenda";

function Home() {
  return <div>
    <Header />
    <BemVindo />
    <Encomenda />
  </div>
}

export default Home
