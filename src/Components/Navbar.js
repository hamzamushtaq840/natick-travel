import React, { useState } from 'react'
import styles from './Navbar.module.css'
import image1 from './../Assets/image1.png'
import Group9 from './../Assets/Group9.png'

function Navbar() {
  const [mobile,setMobile] = useState(false)

  const handleMobile =() =>
  {
    setMobile((state) => !state)
  }
  return (
    <>
    <nav className={styles.nav}>
        <ul>
            <img className={styles.img1} src={image1} alt="Logo"/>

            <div className={styles.items}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Area we Cover</li>
                <li>Fleets</li>
                <li>Airport Minivan</li>
            </div>

            <button>Login</button>
            <img onClick={handleMobile} className={styles.hamburger} src={Group9} alt="Logo"/>
        </ul>
    </nav>
          {mobile && 
            <div className={styles.items2}>
              <hr></hr>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Area we Cover</li>
                <li>Fleets</li>
                <li>Airport Minivan</li>
            </div>}
    </>
  )
}

export default Navbar