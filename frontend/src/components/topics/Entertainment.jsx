import React, { useEffect } from 'react'
import { GiExpand } from 'react-icons/gi'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrendsEntertainment } from '../../redux/actions/trendsActions'

const Entertainment = ({ entertainment, getRealTimeTrendsEntertainment }) => {

    useEffect(() => getRealTimeTrendsEntertainment('e'), [])

    return (

        <section className='topic-container'>
            <h1 className='topic-container__title-e'>Entretenimento</h1>
            {entertainment ? entertainment.map((topic, i) =>
                <div className='topic-container__topics' key={i}>
                    <a className='topic-container__topics__title' target="_blank"
                        rel="noopener noreferrer" href={topic.articles[0].url}>
                        {topic.articles[0].articleTitle.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                    </a>
                    <p className='topic-container__topics__paragraph'>
                        {topic.articles[0].snippet.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                    </p>
                    <div className='topic-container__topics__related'>
                        <span className='topic-container__topics__related__source'>
                            {topic.articles[0].time} por <strong>{topic.articles[0].source}</strong>
                        </span>
                        <span className='topic-container__topics__related__icon'>
                            <GiExpand />
                        </span>
                    </div>
                </div>) : 'Loading...'}
        </section>

    )
}


const mapStatetoProps = state => ({
    entertainment: state.trend.entertainment
})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsEntertainment }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Entertainment)
