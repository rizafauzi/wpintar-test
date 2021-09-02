
import React, { useEffect, useState } from 'react'
import { useQuery} from '@apollo/client'
import useWindowSize from '../../../utils/useWindowSize'

import TripCard from '../../molecules/TripCard'
import SectionTitle from '../../atoms/SectionTitle'
import { GET_ALL_TRIP } from '../../../graphql/query/trip'

import * as styles from './TripSection.module.scss'

const TripSection = () => {
  const windowSize = useWindowSize()
  const { loading, error, data } = useQuery(GET_ALL_TRIP);
  const [visitData, setVisitData] = useState([])
  
  useEffect(() => {
    if (data) {
      let copiedData = [...data.trips]
      const result = [];
      while (copiedData.length > 0) {
        const odd = copiedData.splice(0, 2);
        result.push(odd);
        const even = copiedData.splice(0, 3);
        result.push(even);
      }
      setVisitData(result)
    }
  }, [data])

  if (error) {
    return (
      <div />
    )
  }

  if (loading) {
    return (
      <section className="my-6 is-flex is-flex-direction-column">
        <div className="shimmer mb-4" style={{ width: '40%', height: '2em' }}/>
        <div className={styles.loading}>
          {Array.apply(null, Array(3)).map((_, index) => (
            <div 
              key={index}
              className="shimmer" 
              style={{ width: '100%', height: '30vh' }} 
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="my-6">
      <SectionTitle title="Get Inspired for your next trip" />
      {visitData.map((tripData, i) => (
        <div 
          key={i}
          className={styles.content} 
          style={{ 
            gridTemplateColumns: `repeat(${windowSize.isMobile ? 1 : tripData.length}, 1fr)` 
          }}
        >
          {tripData.map((dt, index) => (
              <TripCard key={index} data={dt.data} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default TripSection