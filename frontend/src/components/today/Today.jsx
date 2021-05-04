import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import { getDailyTrends } from '../../redux/actions/trendsActions'

// JSX
import SideTrends from '../sideTrend/SideTrends'

const Today = props => {

    useEffect(() => props.getDailyTrends(), [])

    console.log(props.countryDaily)


    return (
        <div className="container">
            <div className='container-daily'>
                <div className='container-daily__side-trends-container'>
                    <div className="container-daily__side-trends">
                        {props.countryDaily ? props.countryDaily.todayTrends.map((trend, i) => (
                            <SideTrends key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles[0].title} linkArticle={trend.articles[0].url}
                                TimeArticle={trend.articles[0].timeAgo} SourceArticle={trend.articles[0].source} />
                        )) : 'Loading..'}
                    </div>
                </div>
                <div className='container-daily__state-trends'>

                </div>
            </div>
        </div>

    )
}


const mapStatetoProps = state => ({
    countryDaily: state.keyword.countryDaily
})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getDailyTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)