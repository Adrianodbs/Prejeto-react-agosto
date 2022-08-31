import { Link } from 'react-router-dom'
import './style.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdHome} from 'react-icons/io'
import {MdCake, MdClose} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'



import { useState } from 'react'


function Header() {

  const [menuAtivo, setMenuAtivo] = useState(false)

  const toggleMode = () =>{
    setMenuAtivo(!menuAtivo)
  }
 
  return (
    <div className='header'>
      <img src='/img/logo-mobile.png' alt="Logo" className='logo-mobile' />
      <img src='/img/logo.png' alt="Logo" className='logo' />
      <ul className={menuAtivo ? '' : 'menu-hide'}>
        <li>
          <Link to='/'><IoMdHome className='icon-menu' /> Início</Link>
        </li>
        <li>
          <Link to='/produtos'><MdCake className='icon-menu' /> Produtos</Link>
        </li>
        <li>
          <Link to='/contato'><FaPhoneAlt className='icon-menu' size={16} /> Contato</Link>
        </li>
      </ul>
      {menuAtivo ? < MdClose color='#fff' size={20} className='menu-hamburguer' onClick={toggleMode} /> : <GiHamburgerMenu color='#fff' size={20} className='menu-hamburguer' onClick={toggleMode} /> }
    </div>
  )
}

export default Header