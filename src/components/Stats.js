import React from 'react'
import PropTypes from 'prop-types'
import './Stats.css'

const Stats = ({
    statOne,
    statOneText,
    statTwo,
    statTwoText,
    statThree,
    statThreeText,
    statFour,
    statFourText,
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
                                    <h4>{statOne}</h4>
                                    <p>{statOneText}</p>
                                </div>
                                <div className='column stats__col-6'>
                                <h4>{statTwo}</h4>
                                    <p>{statTwoText}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='column stats__col-6'>
                                    <h4>{statThree}</h4>
                                    <p>{statThreeText}</p>
                                </div>
                                <div className='column stats__col-6'>
                                <h4>{statFour}</h4>
                                    <p>{statFourText}</p>
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