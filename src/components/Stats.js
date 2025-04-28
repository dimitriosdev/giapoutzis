import React from 'react'
import PropTypes from 'prop-types'
import './Stats.css'

import Content from '../components/Content'

const Stats = ({ statTitle, statSubtitle, statIntro }) => {
  return (
    <section className="section">
      <div className="container section__stats">
        <div className="row">
          <div className="column-basis-0 stats__col-12">
            <div className="snippet-list">
              <div className="row">
                <div className="column stats__col-6">
                  <h4>{statIntro && statIntro[0].title}</h4>
                  <p>{statIntro && statIntro[0].description}</p>
                </div>
                <div className="column stats__col-6">
                  <h4>{statIntro && statIntro[1].title}</h4>
                  <p>{statIntro && statIntro[1].description}</p>
                </div>
              </div>
              <div className="row">
                <div className="column stats__col-6">
                  <h4>{statIntro && statIntro[2].title}</h4>
                  <p>{statIntro && statIntro[2].description}</p>
                </div>
                <div className="column stats__col-6">
                  <h4>{statIntro && statIntro[3].title}</h4>
                  <p>{statIntro && statIntro[3].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column stats__col-12">
            <div className="text-block">
              <h2>{statTitle}</h2>
              <Content source={statSubtitle} />
              <div className="m-t-40 m-b-10">
                <a href="/contact">
                  <button className="button-home">
                    Επικοινωνήστε μαζί μας
                  </button>
                </a>
                <a href="/projects" style={{ marginLeft: '1rem' }}>
                  <button className="button-home button-secondary">
                    Δείτε τα έργα μας
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Stats.propTypes = {
  statIntro: PropTypes.array,
  statTitle: PropTypes.string,
  statSubtitle: PropTypes.string
}

export default Stats
