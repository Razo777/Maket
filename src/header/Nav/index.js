import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {
  return (
    <ul>
    <li><Link to="/forMan">Для мужчин</Link></li>
    <li> <Link to="/forWoman">Для женщин</Link></li>
    <li><Link to="/forChild">Для детей</Link></li>
    <li><Link to="/"><img src='logo.svg' alt=''/></Link></li>
    <li><Link to="/payment">Оплата</Link></li>
    <li><Link to="/shiping">Доставка</Link></li>
    </ul>
  )
}
