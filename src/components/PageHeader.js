import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content'
import BackgroundVideo from '../components/BackgroundVideo'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  heroVideo,
  large,
  className = ''
}) => {

  if (large) {className += ' PageHeader-large'}
  const custClass = (large) ? '' : 'unsetHeight'
  return (
    <div className={`PageHeader relative ${className}`}>

      <BackgroundVideo poster='' videoTitle='' customClassName={custClass}>
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
  subtitle: PropTypes.string,
  heroVideo: PropTypes.string
}

export default PageHeader
