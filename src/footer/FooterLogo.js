import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
export default function FooterLogo() {
  return (
    <div className={styles.logo_block}>
        <div className={styles.footer_logo}>
            <ul>
                <li> <Link to="/"><img src='logo2.svg' alt=''/></Link></li>
            </ul>
         </div>
               <div className={styles.footer_txt}>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p>
               </div>
     </div>
  )
}
