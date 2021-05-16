import React from 'react'
import { MapPin, Smartphone, Mail, Instagram, Facebook } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
//import FormSimpleAjax from '../components/FormSimpleAjax'
// import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  title,
  subtitle,
  heroImage,
  address,
  phone,
  email,
  // locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      heroImage={heroImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <h4>Στοιχεία επικοινωνίας</h4>
          <div className="Contact--Details">
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
              <a className="Contact--Details--Item" href={`https://www.instagram.com/giapoutzis_t/`}>
                <Instagram /> giapoutzis_t
              </a>
              <a className="Contact--Details--Item" href={`https://www.facebook.com/tolisgiap1`}>
                <Facebook /> tolisgiap1
              </a>
            
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.gr/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            
          </div>
        </div>

        {/* <div>
        <h4>Φόρμα επικοινωνίας</h4>
          <FormSimpleAjax name="Contact" />
        </div> */}
      </div>
    </section>

    {/* <GoogleMap locations={locations} /> */}
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        heroImage
        heroVideo
        instagram
        facebook
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
