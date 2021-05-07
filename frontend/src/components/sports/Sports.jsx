import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrendsSports } from '../../redux/actions/trendsActions'

const Sports = ({ sports, getRealTimeTrendsSports }) => {

    useEffect(() => getRealTimeTrendsSports('s'), [])
    console.log(sports)

    return (
        <>
            {sports ?
                <section className='sports-container'>
                    <h1 className='sports-container__title'>Esportes</h1>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={sports[0].articles[0].url}>
                            {sports[0].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {sports[0].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{sports[0].articles[0].time} por <strong>{sports[0].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={sports[1].articles[0].url}>
                            {sports[1].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {sports[1].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{sports[1].articles[0].time} por <strong>{sports[1].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={sports[2].articles[0].url}>
                            {sports[2].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {sports[2].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{sports[2].articles[0].time} por <strong>{sports[2].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={sports[3].articles[0].url}>
                            {sports[3].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {sports[3].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{sports[3].articles[0].time} por <strong>{sports[3].articles[0].source}</strong></span>
                        </div>
                    </div>

                </section> : 'Loading...'}
        </>
    )
}


const mapStatetoProps = state => ({
    sports: state.sports.sports

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsSports }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Sports)
