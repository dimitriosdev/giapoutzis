import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import BackgroundVideo from '../components/BackgroundVideo'
import './PageHeader.css'

const video = 'https://res.cloudinary.com/duttuhph7/video/upload/v1611437278/wood_plyauq'
const videoPoster = ''
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
      {backgroundImage && (
        <section className="BackgroundVideo-section section">
          <BackgroundVideo poster={videoPoster} videoTitle={title} videoSubtitle={subtitle}>
            {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>
      )}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
