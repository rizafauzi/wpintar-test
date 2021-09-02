import React from 'react'
import * as styles from './Footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <StaticImage
        height={30}
        layout="fixed"
        className="ml-1"
        alt="like_icon"
        placeholder="blurred"
        src="../../../images/odigo-logo-images.png"
      />
    </div>
  )
}

export default Footer