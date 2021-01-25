import React from 'react'
import PropTypes from 'prop-types'

import BackgroundVideo from '../components/BackgroundVideo'
import Content from './Content'
import BackgroundVideo from '../components/BackgroundVideo'
import './PageHeader.css'

<<<<<<< HEAD
const video = 'https://res.cloudinary.com/duttuhph7/video/upload/v1611437278/wood_plyauq'
const videoPoster = ''
=======

>>>>>>> f012355f483022c47e850018e6b535e60911d30f
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
<<<<<<< HEAD
      {backgroundImage && (
        <section className="BackgroundVideo-section section">
          <BackgroundVideo poster={videoPoster} videoTitle={title} videoSubtitle={subtitle}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>
      )}
=======

      <BackgroundVideo poster='' videoTitle=''>
        {heroVideo && <source src={heroVideo} type="video/mp4" />}
      </BackgroundVideo>
      <div className="PageHeader__content container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
>>>>>>> f012355f483022c47e850018e6b535e60911d30f
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
