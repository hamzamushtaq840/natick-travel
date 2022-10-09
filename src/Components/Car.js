import React from 'react'
import styles from './Car.module.css'
import placeholder from './../Assets/placeholder.png'
import placeholder2 from './../Assets/placeholder2.png'
import placeholder3 from './../Assets/placeholder3.png'
import placeholder4 from './../Assets/placeholder4.png'
import placeholder5 from './../Assets/placeholder5.png'
import placeholder6 from './../Assets/placeholder6.png'


function Car() {
  return (
    <div className={styles.carMain}>
        <div className={styles.Header}>
            <div className={styles.h1Container}>
                <h1>Get Your Our Best <span>FLEETS !</span></h1>
            </div>
            <div className={styles.pContainer}>
                <p>Natick Airport Taxi/Limo Service offers most reliable transfer to/from the Boston Logan Airport with comfortable fleet of vehicle</p>
            </div>
        </div>
        <div className={styles.carCards}>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>COMPACT SEDAN</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder2}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>3-PAX SEDAN</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder3}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>6/7-PAX MINIVAN</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder4}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>4-PAX-MINIVAN</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder5}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>4-PAX-SUV</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
            <div className={styles.singleItem}>
                <div className={styles.imageHolder}>
                    <img src={placeholder6}/>
                </div>
                <div className={styles.bookNow}>
                    <h1>4-PAX SUBURBAN</h1>
                    <button className={styles.button}>Book Now</button>
                </div>
                <p>Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.Compact Sedan for 2 Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                <div className={styles.Footer}>
                    <div className={styles.subMain}>
                        <span>Transmission</span>
                        <h3>Automatic</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Luggage</span>
                        <h3>Max 02</h3>
                    </div>
                    <div className={styles.subMain}>
                        <span>Passenger</span>
                        <h3>2 Passenger</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Car