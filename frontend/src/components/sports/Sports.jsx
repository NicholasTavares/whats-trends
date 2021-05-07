import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrends } from '../../redux/actions/trendsActions'

const Sports = ({ realTime, getRealTimeTrends }) => {

    useEffect(() => getRealTimeTrends(), [])
    console.log(realTime)

    return (
        <>
            {realTime ?
                <section className='sports-container'>
                    <h1 className='sports-container__title'>Esportes</h1>

                    <div className='sports-container__topics'>
                        <span className='sports-container__topics__title'>
                            {realTime[0].articles[0].articleTitle}
                        </span>
                        <p className='sports-container__topics__paragraph'>
                            {realTime[0].articles[0].snippet}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{realTime[0].articles[0].time} por <strong>{realTime[0].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <span className='sports-container__topics__title'>
                            {realTime[1].articles[0].articleTitle}
                        </span>
                        <p className='sports-container__topics__paragraph'>
                            {realTime[1].articles[0].snippet}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{realTime[1].articles[0].time} por <strong>{realTime[1].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <span className='sports-container__topics__title'>
                            {realTime[2].articles[0].articleTitle}
                        </span>
                        <p className='sports-container__topics__paragraph'>
                            {realTime[2].articles[0].snippet}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{realTime[2].articles[0].time} por <strong>{realTime[2].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <span className='sports-container__topics__title'>
                            {realTime[3].articles[0].articleTitle}
                        </span>
                        <p className='sports-container__topics__paragraph'>
                            {realTime[3].articles[0].snippet}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{realTime[3].articles[0].time} por <strong>{realTime[3].articles[0].source}</strong></span>
                        </div>
                    </div>

                </section> : 'Loading...'}
        </>
    )
}


const mapStatetoProps = state => ({
    realTime: state.realTime.realTime

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Sports)
