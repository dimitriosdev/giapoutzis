import React from 'react'
import PropTypes from 'prop-types'
import './Stats.css'

const Stats = ({
    statYear,
    statYearText,
    statClients,
    statClientsText,
    statTitle,
    statSubtitle
  }) => {
    return (
        <section className="section">
            <div className='container section__stats'>
                <div className='row'>
                    <div className='column stats__col-12'>
                        <div className='snippet-list'>
                            <div className='row'>
                                <div className='column stats__col-6'>
                                    <h4>{statYear}</h4>
                                    <p>{statYearText}</p>
                                </div>
                                <div className='column stats__col-6'>
                                <h4>{statClients}</h4>
                                    <p>{statClientsText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column stats__col-12'>
                        <div className='text-block'>
                            <h2>{statTitle}</h2>
                            <p>{statSubtitle}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

Stats.propTypes = {
    statYearText: PropTypes.string,
    statYear: PropTypes.string,
    statClientsText: PropTypes.string,
    statClients: PropTypes.string,
    statTitle: PropTypes.string,
    statSubtitle: PropTypes.string
  }

export default Stats