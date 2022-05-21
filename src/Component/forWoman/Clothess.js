import React from "react";
import styles from './ForWoman.module.css'

export default function Clothess() {
    let clothes =[
          {
           id:1,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          },
          {
           id:2,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          },
          {
           id:3,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          },
          {
           id:4,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          },
          {
           id:5,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          },
          {
           id:6,
           src:"Rectangle3.png",
           name:'ПЛАТЬЯ',
          }


   ]        
 return (
   <div className={styles.pic}>
      {clothes.map((i)=>{
          return(
              <div key={i.id} >
              <img src={i.src} alt=''/>
              <h4>{i.name}</h4>
              </div>
          )
      })}
   </div>
 )
}