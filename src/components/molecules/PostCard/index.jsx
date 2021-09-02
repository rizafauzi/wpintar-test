
import React from 'react'
import * as styles from './PostCard.module.scss'
import { StaticImage } from "gatsby-plugin-image"


const PostCard = ({ data }) => {
  return (
    <button type="button">
      <div className={styles.wrapper}>
        <img 
          alt={data.title}
          src={data.thumbnail.url} 
          className={styles.thumbnail} 
        />

        <div className={styles.bottomBar}>
            <h3 className="has-text-white">{ data.title?.toUpperCase() }</h3>
            <div className="is-flex is-flex-direction-row">
              <div className="is-flex is-flex-direction-row is-align-items-center mr-2">
                <div className="has-text-white">{ data.total_likes }</div>
                <StaticImage
                  width={15}
                  height={15}
                  layout="fixed"
                  alt="like_icon"
                  className="ml-2"
                  placeholder="blurred"
                  src="../../../images/love-icon.png"
                />
              </div>
              <div className="is-flex is-flex-direction-row is-align-items-center">
                <div className="has-text-white">{ data.total_comments }</div>
                <StaticImage
                  width={15}
                  height={15}
                  layout="fixed"
                  className="ml-2"
                  alt="comment_icon"
                  placeholder="blurred"
                  src="../../../images/bubble-icon.png"
                />
              </div>
            </div>
        </div>

      </div>
      <p className="is-size-7 my-5">
        {data.body.text}
      </p>
    </button>
  )
}

export default PostCard