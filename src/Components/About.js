import React from 'react';
import styles from './About.module.css';
import Group_bottomLeft from './../Assets/Group_bottomLeft.png';
import Group_bottomRight from './../Assets/Group_bottomRight.png';
import Group from './../Assets/Group.png';

function About() {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <div className={styles.h1Container}>
            <h1>Why Book With Us</h1>
            <h1 className={styles.abc}>
              for <span>NATICK AIRPORT TAXI ?</span>
            </h1>
          </div>
          <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elit, est, viverra blandit elementum gravida. Viverra in mi quis odio. </p>
        </div>
        <div className={styles.leftBottom}>
          <img  className={styles.Group_bottomLeft} src={Group_bottomLeft} />
          <img className={styles.Group_bottomRight} src={Group_bottomRight} />
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.Group} src={Group} />
      </div>
    </div>
  );
}

export default About;
