import React from 'react'
import styles from './Slider.module.css'

export default function Stock() {
  return (
    <div className={styles.stocks}>
      <h2>Зимняя распродажа</h2>
      <h1>СКИДКИ ДО 90%</h1>
      <button className={styles.btn}>СМОТРЕТЬ МОДЕЛИ</button>
    </div>
  )
}
