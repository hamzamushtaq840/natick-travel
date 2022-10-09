import React from 'react'
import styles from './Home.module.css'
import background from '../Assets/left.png'
import background2 from './../Assets/group3.png'
import arrow from './../Assets/arrow.png'
import rightarroww from './../Assets/rightarroww.png'
import trip from '../Assets/trip.png'

function Home() {
  return (
    <div className={styles.main} >
        <div className={styles.left}>
            <div className={styles.header}>
                <h1>NO SURCHARGE</h1> 
                <h1>RELIABLE</h1>
                <h1>TRAVEL STRESS FREE</h1>
            </div>
            <div className={styles.content}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna, pulvinar lorem in ultrices nulla nisi vel. Fusce commodo ultricies odio sit odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna, pulvinar lorem in ultrices nulla nisi vel. </p>
            <button className={styles.getQuote}>Get Quote</button>
            </div>
            <img className={styles.trip} src={trip} alt="milestone"/>
        </div>
        <div className={styles.right} style={{ backgroundImage: `url(${background})`,backgroundPosition: "-1.2vh -9.51vw",backgroundRepeat:'no-repeat',backgroundSize:'contain' }} >
        </div>
        <div className={styles.new} style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'contain' }} >
          <div className={styles.abc}>

        <div className={styles.header}>
                <h1>A RELIABLE AIRPORT </h1> 
                <h1>TAXI TO YOUR</h1>
                <h1>DESTINATION IN TOWN</h1>
            </div>
            <div className={styles.content}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna, pulvinar lorem in ultrices nulla nisi vel. Fusce commodo ultricies odio sit odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna, pulvinar lorem in ultrices nulla nisi vel. </p>
            <button className={styles.getQuote}>Get Started</button>
            </div>
            <img className={styles.trip} src={trip} alt="milestone"/>
        </div>
        </div>

        <div className={styles.input}>
          <div className={styles.headd}>
            <h1>Get A Quote</h1>
          </div>
          <div className={styles.Mainss}>
            <div className={styles.leftArrow}>
              <img className={styles.arrow} src={arrow}/>
            </div>
            <div className={styles.inputs}>
              <input className={styles.input1} placeholder='Boston Logan International Airport, Boston' type="text"/>
              <input className={styles.input2} placeholder="To :  Airport, Address, Hotel ..."  type="text"/>
            </div>
            <div className={styles.RightArrow}>
              <img className={styles.rightarroww} src={rightarroww}/>
            </div>
            <div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home