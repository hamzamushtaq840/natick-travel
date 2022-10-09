import React from 'react'
import styles from './Footer.module.css'
import image1 from './../Assets/image1.png'
import insta from './../Assets/insta.png'

function Footer() {
  return (
    <div className={styles.Main}>
        <div className={styles.Top}>
            <div className={styles.header}>
                <h1>Traveling to Logan Airport</h1>
                <h1>from your Location ?</h1>
            </div>
        <div className={styles.p}>
            <p>If you are looking for safe and comfortable transportation services then Natick Airport Taxi & car Services is the place to contact (508) 907-6115. We aim at delivering convenient and affordable car services across the Massachusetts.</p>
        </div>
        <button className={styles.button}>Book Now</button>
        </div>
        <div className={styles.bottom}>
            <div className={styles.bottom1}>
                <div className={styles.one}>
                    <img src={image1}></img>
                    <p>Natick Airport Taxi is most trusted reliable Logan airport taxi and car service in Boston.</p>
                </div>
                <div className={styles.two}>
                        <div className={styles.subOne} >
                            <h3>Quick Links</h3>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Fleets</p>
                            <p>Service Area</p>
                        </div>
                        <div className={styles.subTwo} >
                            <h3>Major service Area</h3>
                            <p>Worcester Airport Taxi</p>
                            <p>Auburn Airport Taxi</p>
                            <p>Shrewsbury Airport Taxi</p>
                            <p>Leichester Airport Taxi</p>
                        </div>
                </div>
                <div className={styles.three}>
                    <div className={styles.subThreeOne} >
                            <h3>Contact us</h3>
                            <p>Contract us</p>
                            <p>Cookies Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy policy</p>
                    </div>
                    <div className={styles.subThreeTwo}>
                        <h3>Get in touch</h3>
                        <p><span>Office:</span> Concord Airport Taxi & Car Services 300 Baker Avenue, Concord, MA 01742</p>
                        <p><span>Phone:</span> (508) 907-6115</p>
                        <p><span>Email:</span>  info@natickairporttaxi.com</p>
                        <img src={insta}></img>
                    </div>
                </div>
            </div>
            <div className={styles.bottom2}>
                <p>Copyright © 2022 <span>Natick Airport Taxi.</span> All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}
// style={{ backgroundImage: `url(${background})`,backgroundPosition: "-1.2vh -9.51vw",backgroundRepeat:'no-repeat',backgroundSize:'contain' }}
export default Footer