import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrendsSports } from '../../redux/actions/trendsActions'

const Sports = ({ sports, getRealTimeTrendsSports }) => {

    useEffect(() => getRealTimeTrendsSports('s'), [])
    console.log(sports)

    return (
        <section className='topic-container'>
            <h1 className='topic-container__title-s'>Esporte</h1>
            {sports ? sports.map((topic) =>
                <div className='topic-container__topics'>
                    <a className='topic-container__topics__title' target="_blank"
                        rel="noopener noreferrer" href={topic.articles[0].url}>
                        {topic.articles[0].articleTitle.replace(/&#39;/g, "'")}
                    </a>
                    <p className='topic-container__topics__paragraph'>
                        {topic.articles[0].snippet.replace(/&#39;/g, "'")}
                    </p>
                    <div className='topic-container__topics__related'>
                        <span>{topic.articles[0].time} por <strong>{topic.articles[0].source}</strong></span>
                    </div>
                </div>) : 'Loading...'}

        </section>

    )
}


const mapStatetoProps = state => ({
    sports: state.trend.sports

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsSports }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Sports)
