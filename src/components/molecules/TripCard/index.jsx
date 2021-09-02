
import React from 'react'
import * as styles from './TripCard.module.scss'


const TripCard = ({ data }) => {
  return (
    <button type="button" className={styles.wrapper}>
      <img className={styles.thumbnail} src={data.thumbnail.url} alt={data.title}/>
      <div className={styles.title}>
        <h3 className="has-text-white">{ data.title }</h3>
      </div>
    </button>
  )
}

export default TripCard