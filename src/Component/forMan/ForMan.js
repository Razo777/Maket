import React from 'react'
import styles from './ForMan.module.css'
import Clothes from './Clothes'

export default function ForMan() {
  return (
    <div className={styles.cont}>
      <div className={styles.txt}>
        <h4>МУЖСКАЯ КОЛЛЕКЦИЯ</h4>
        <p>Обувь, полуверы, костюмы</p>
        <button className={styles.btns}><hr className={styles.line_slick}/><p>></p></button>        
      </div>
      <div className={styles.image}><img src='Rectangle3.png' alt=''/></div> 
        <Clothes/>       
    </div>     
  )
}
