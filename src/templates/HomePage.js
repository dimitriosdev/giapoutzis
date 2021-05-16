import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Stats from '../components/Stats'
import Gallery from '../components/Gallery'
import Accordion from '../components/Accordion'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  heroTitle,
  heroSubtitle,
  heroVideo,
  introTitle,
  introSubtitle,
  intro,
  galleryTitle,
  gallery,
  accordionTitle,
  accordion,
  body
}) => (

  <main className="Home">
    <PageHeader
      large
      title={heroTitle}
      subtitle={heroSubtitle}
      heroVideo={heroVideo}
    />
    <Stats
      statTitle={introTitle}
      statSubtitle={introSubtitle}
      statIntro={intro}>
    </Stats>
    <section className="section">
      <div className="container">
        <h3 className='p-b-20'>{galleryTitle}</h3>
        <Gallery images={gallery} />
        <div className='flexCenter m-t-b-10'>
          <a href='/blog'>Δείτε περισσότερες δουλείες μας</a>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
      <h3 className='p-b-20'>{accordionTitle}</h3>
        <Accordion items={accordion} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h3 className='p-b-20'>Συχνές ερωτήσεις</h3>
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        heroTitle
        heroSubtitle
        heroVideo
        intro {
          title
          description
        }
        introTitle
        introSubtitle
        galleryTitle
        accordionTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
