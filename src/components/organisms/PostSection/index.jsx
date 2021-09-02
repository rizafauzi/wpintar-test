
import React from 'react'
import * as styles from './PostSection.module.scss'

import { useQuery} from '@apollo/client'
import SectionTitle from '../../atoms/SectionTitle'
import { GET_ALL_POST } from '../../../graphql/query/post'
import PostCard from '../../molecules/PostCard'

const TripSection = () => {
  const { loading, error, data } = useQuery(GET_ALL_POST);

  if (error) {
    return (
      <div />
    )
  }

  if (loading) {
    return (
      <section className="my-6">
        <div className="shimmer mb-4" style={{ width: '40%', height: '2em' }}/>
        <div className={styles.content}>
          {Array.apply(null, Array(3)).map((_, index) => (
            <div 
              key={index}
              className="shimmer" 
              style={{ width: '100%', height: '40vh' }} 
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="my-6">
      <SectionTitle title="Today post top places to Visit" />
      <div className={styles.content}>
        {data.posts.map((dt, i) => (
          <PostCard key={i} data={dt.data} />
        ))}
      </div>
    </section>
  )
}

export default TripSection