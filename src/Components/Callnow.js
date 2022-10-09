import React from 'react'
import styles from './Callnow.module.css'
import background from './../Assets/callnow.png'
import vector from './../Assets/Vector.png'
function Callnow() {
  return (
    //background image needs here
    <div className={styles.main} > 
        <div className={styles.heads}>
            <h1 className={styles.h1}>We are Ready to take your call 24 hours, 7 Days !</h1>
            <div className={styles.second}>
                <img src={vector}/>
                <h1>Call Now : (508) 907-6115</h1>
            </div>
        </div>
    </div>
  )
}

export default Callnow