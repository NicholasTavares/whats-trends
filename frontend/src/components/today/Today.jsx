import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import { getDailyTrends } from '../../redux/actions/trendsActions'

// JSX
import Carousel from '../topTrendsBrasil/Carousel'
import Sports from '../topics/Sports'
import Business from '../topics/Business'
import Entertainment from '../topics/Entertainment'

const Today = ({ daily, getDailyTrends }) => {

    useEffect(() => getDailyTrends(), [])

    return (
        <div className="container">
            <div className='container-daily'>
                <div className='container-daily__side-trends-container'>
                    <Carousel daily={daily} />
                </div>
                <div>
                    <div className='container-daily__container-real-time'>
                        <Business />
                        <Sports />
                        <Entertainment />
                    </div>
                    <div className='container-daily__container-real-time'>
                        <Entertainment />
                    </div>

                </div>

            </div>
        </div>

    )
}


const mapStatetoProps = state => ({
    daily: state.trend.countryDaily,
})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getDailyTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)