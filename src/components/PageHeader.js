import React from 'react'
import PropTypes from 'prop-types'

import BackgroundVideo from '../components/BackgroundVideo'
import Content from './Content'
import './PageHeader.css'


const PageHeader = ({
  title,
  subtitle,
  heroVideo,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>

      <BackgroundVideo poster='' videoTitle=''>
        {heroVideo && <source src={heroVideo} type="video/mp4" />}
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
