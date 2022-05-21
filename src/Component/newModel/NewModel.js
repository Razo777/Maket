import React from 'react'
import BlocksMod from './BlocksMod'
import styles from './NewModel.module.css'

export default function NewModel() {
  return (
    <>
      <div className={styles.title}>
        <h1>Новые модели</h1>
      </div>
      <BlocksMod />
      <div className={styles.btn_block}>
        <button className={styles.btn}>
          <span>ВСЕ МОДЕЛИ</span>
          
          </button>
      </div>
    </>
  )
}
