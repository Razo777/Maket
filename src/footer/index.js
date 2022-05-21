import React, {  useEffect, useState} from 'react'
import AllLinks from './AllLinks';
import footer from './footer';
import styles from './footer.module.css'
import FooterLogo from './FooterLogo';

export default  function Footer() {
  const [item,setItem]=useState({})
  
 useEffect(()=>{
   
 const items =  footer()
 
setItem(items)
},[])
  return (
    <div className={styles.lists}>
      <FooterLogo/>
     <AllLinks menulink={item.mainlinks}/>
     <AllLinks menulink={item.category}/>
     <AllLinks menulink={item.alllinks}/>
    </div>
  )
}
