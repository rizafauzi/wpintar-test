
import React from 'react'
import * as styles from './Header.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {

  return (
    <div className={styles.header}>
      <StaticImage
        alt="banner"
        layout="fullWidth"
        placeholder="blurred"
        className={styles.banner}
        src="../../../images/hero-images.png"
      />
      <StaticImage
        width={100}
        alt="banner"
        layout="fixed"
        placeholder="blurred"
        className={styles.logo}
        src="../../../images/odigo-logo-images.png"
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 className="has-text-white has-text-weight-medium" >Discover Amazing Places in Japan</h1>
          <h4 className="has-text-white">
            Jump off into balcony, onto stranger's head. Chase ball of string hide when guests come over. 
            Being Georgeous ith belly side up i could pee this if i had the energy but nder the bed, for attack the child, open the door.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Header