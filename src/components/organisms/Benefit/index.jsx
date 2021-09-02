
import React from 'react'
import * as styles from './Benefit.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Benefit = () => {

  const benefits = [
    {
      title: 'Welcome to Odigo!',
      description: `Jump off into balcony, onto stranger's head. Chase ball of string hide when guests come over`,
      image: <StaticImage
        width={50}
        height={50}
        alt="banner"
        layout="fixed"
        placeholder="blurred"
        src="../../../images/benefit-icon-01.png"
      />
    },
    {
      title: 'Your Personal Japan Guide',
      description: `Jump off into balcony, onto stranger's head. Chase ball of string hide when guests come over`,
      image: <StaticImage
        width={50}
        height={50}
        alt="banner"
        layout="fixed"
        placeholder="blurred"
        src="../../../images/benefit-icon-02.png"
      />
    },
    {
      title: 'Promoting Local Businesses',
      description: `Jump off into balcony, onto stranger's head. Chase ball of string hide when guests come over`,
      image: <StaticImage
        width={50}
        height={50}
        alt="banner"
        layout="fixed"
        placeholder="blurred"
        src="../../../images/benefit-icon-03.png"
      />
    }
  ]

  return (
    <div className={styles.wrapper}>
      <h2 className="mb-5">Benefits of Odigo</h2>
      <div className={styles.benefitWrapper}>
        {benefits.map((dt, i) => (
          <div key={i} className={styles.benefit}>
            { dt.image }
            <div>
              <h4 className="my-2">{ dt.title }</h4>
              <h5>{ dt.description }</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefit