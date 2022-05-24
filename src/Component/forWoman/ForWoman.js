import React from 'react'
import Clothess from './Clothess'
import styles from './ForWoman.module.css'

export default function ForWoman() {
  return (
    <div className={styles.cont}>
      <div className={styles.txt}>
        <h4>ЖЕНСКАЯ КОЛЛЕКЦИЯ</h4>
        <p>Обувь, полуверы, костюмы</p>
        <button className={styles.btns}><hr className={styles.line_slick}/><p>></p></button>        
      </div>
      <div className={styles.image}><img src='Rectangle3.1.png' alt=''/></div> 
      <Clothess/>
    </div>
  )
}
