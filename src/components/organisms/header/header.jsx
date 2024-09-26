import React from 'react'
import Title from '../../atoms/title/title.jsx'
import HamburguerMenu from '../../molecules/hamburgerMenu/hamburguerMenu.jsx'
import './styles.css';



export default function header() {
  return (
    <div className='header'>
      <HamburguerMenu/>
      <Title className='header-title' text={"Hola"}/>
      
    </div>
  )
}
