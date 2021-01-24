import React from 'react'
import PropTypes from 'prop-types'

import BackgroundVideo from '../components/BackgroundVideo'
import Content from './Content'
import './PageHeader.css'


const videoPoster = ''
const videoTitle = ''
const video = 'https://res.cloudinary.com/duttuhph7/video/upload/v1611525654/part1_her6gs.mp4'//'https://res.cloudinary.com/duttuhph7/video/upload/v1611521346/final_n3k2h2.mp4'
const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>

      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
      <div className="PageHeader__content container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
