import React from 'react'
import styles from './NewModel.module.css'

export default function BlocksMod() {
    let blocks = [
        {
            id: 1,
            src: 'Rectangle2.png',
            name: 'Коктейльное платье',
            price: '₽ 40 000'
        },
        {
            id: 2,
            src: 'Rectangle2.png',
            name: 'Коктейльное платье',
            price: '₽ 40 000'
        },
        {
            id: 3,
            src: 'Rectangle2.png',
            name: 'Коктейльное платье',
            price: '₽ 40 000'
        },
        {
            id: 4,
            src: 'Rectangle2.png',
            name: 'Коктейльное платье',
            price: '₽ 40 000'
        }
    ]
    return (
        <div className={styles.block_Model}>
            {blocks.map((i) => {
                return (
                    <div className={styles.block} key={i.id}>
                        <div className={styles.circl}>
                            <div className={styles.quadr}></div>
                        </div>
                        <div className={styles.image_mod}>
                            <img src={i.src} alt='' />
                        </div>
                        <div className={styles.txt}>
                            <h6>{i.name}</h6>
                            <span>{i.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
