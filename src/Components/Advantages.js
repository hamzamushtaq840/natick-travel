import React from 'react'
import desc from './../Assets/desc.png'
import desc2 from './../Assets/desc2.png'
import desc3 from './../Assets/desc3.png'
import desc4 from './../Assets/desc4.png'
import arrowup from './../Assets/arrowup.png'
import arrowdown from './../Assets/arrowdown.png'
import arrowdown2 from './../Assets/arrowdown2.png'
import comma from './../Assets/comma.png'
import comma2 from './../Assets/comma2.png'
import image1 from './../Assets/image3.png'
import image2 from './../Assets/Image2.png'
import styles from './Advantages.module.css'

function Advantages() {
  return (
    <div className={styles.Main}>
      <div className={styles.one}>
        <div className={styles.top}>
          <div className={styles.h1Container}>
            <h1>NATICK</h1>
            <span>ADVANTAGES</span>
          </div>
          <div className={styles.pContainer}>
            <p>At Natick Airport Taxi & Car Services, we specialize in presenting our customers with reliable and comfortable airport transfer services. We have an extensive fleet of vehicles that are well...</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.card}>
              <img className={styles.image} src={desc}/>
              <div className={styles.desc}>
                <h3 className={styles.head}>BOSTON AIRPORT TRANSFER</h3>
                <p>Offering superior quality Natick Airport pickup and drop off services from Boston Logan Airport.drop off services from Boston Logan Airport.</p>
              </div>
          </div>
          <div className={styles.card}>
              <img className={styles.image2} src={desc2}/>
              <div className={styles.desc}>
                <h3 className={styles.head}>CORPORATE TRANSFER</h3>
                <p>Once you get in touch with us, you can bank on our reliable services at all times. Since we understand the value of your time, we deliver highly punctual services.</p>
              </div>
          </div>
          <div className={styles.card}>
              <img className={styles.image3} src={desc3}/>
              <div className={styles.desc}>
                <h3 className={styles.head}>STATION TRANSFER</h3>
                <p>Natick Airport Taxi & Car Services offers high quality car transportation services for people moving in and out of the Natick to Amtrak Station.</p>
              </div>
          </div>
          <div className={styles.card}>
              <img className={styles.image2} src={desc4}/>
              <div className={styles.desc}>
                <h3 className={styles.head}>SEAPORT TRANSFER</h3>
                <p>We also offer our customers with the opportunity to choose shared rides when they need to move from one part of the city to another.</p>
              </div>
          </div>
        </div>
      </div>

      <div className={styles.two}>
          <div className={styles.h1Container2}>
            <h1>What Customers Say</h1>
            <span>&nbsp;About Us</span>
          </div>
          <div className={styles.slider}>
            <div className={styles.icons}>
              <img className={styles.arrowup} src={arrowup}/>
              <img className={styles.arrowdown} src={arrowdown}/>
              <img className={styles.arrowdown2} src={arrowdown2}/>
            </div>
            <div className={styles.cardHolder}>
              <div className={styles.card2}>
                <div className={styles.cardTop}>
                  <img src={image1}/>
                  <div className={styles.topRight}>
                    <h3>Esther Hills</h3>
                    <p>Lead Intranet Technician</p>
                  </div>
                </div>
                  <div className={styles.cardBottom}>
                    <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</p>
                  </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardTop}>
                  <img src={image2}/>
                  <div className={styles.topRight}>
                    <h3>Esther Hills</h3>
                    <p>Lead Intranet Technician</p>
                  </div>
                </div>
                  <div className={styles.cardBottom}>
                    <p>Fuga et debitis numquam omnis sed explicabo rem. Temporibus aut earum harum sint enim quia sit. Odit blanditiis illum amet doloribus adipisci corrupti explicabo. Qui non omnis eum consequatur voluptas aut ut dolor aut.</p>
                  </div>
              </div>
            </div>
          </div>
              <img src={comma} className={styles.comma}/>
              <img src={comma2} className={styles.comma2}/>
      </div>
    </div>
  )
}

export default Advantages