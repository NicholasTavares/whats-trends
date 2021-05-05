import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                        <Carousel axis={'horizontal'} autoPlay={true} interval={8500} showStatus={false} showThumbs={false} infiniteLoop={true}
                            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                                hasPrev && (
                                    <FiChevronLeft style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', left: '-8', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                                )
                            } renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
                                hasPrev && (
                                    <FiChevronRight style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', right: '-8', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                                )
                            }>





                            {props.countryDaily ? props.countryDaily.todayTrends.map((trend, i) => (
                                <SideTrends key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles} />
                            )) : 'Loading...'}
                        </Carousel>
                    </div>
                </div>
                <div className='container-daily__state-trends'>

                </div>
            </div>
        </div>

    )
}

/*
                       <Carousel axis={'horizontal'} autoPlay={true} interval={5000} showStatus={false}
                           renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                               hasPrev && (
                                   <FiChevronLeft onClick={clickHandler} />
                               )
                           }>





                           {props.countryDaily ? props.countryDaily.todayTrends.map((trend, i) => (
                               <SideTrends key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles[0].title} linkArticle={trend.articles[0].url}
                                   TimeArticle={trend.articles[0].timeAgo} SourceArticle={trend.articles[0].source} />
                           )) : 'Loading..'}
                       </Carousel>
                       */

const mapStatetoProps = state => ({
    countryDaily: state.keyword.countryDaily
})

/*{props.countryDaily ? props.countryDaily.todayTrends.map((trend, i) => (
                            <SideTrends key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles[0].title} linkArticle={trend.articles[0].url}
                                TimeArticle={trend.articles[0].timeAgo} SourceArticle={trend.articles[0].source} />
                        )) : 'Loading..'}*/
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getDailyTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)