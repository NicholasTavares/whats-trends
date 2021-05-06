import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrends } from '../../redux/actions/trendsActions'

const Sports = ({ realTime, getRealTimeTrends }) => {

    useEffect(() => getRealTimeTrends(), [])
    console.log(realTime)

    return (
        <section className='sports-container'>
            <h1 className='sports-container__title'>Esportes</h1>

            <div className='sports-container__topics'>
                <span className='sports-container__topics__title'>Campeonato Brasileiro</span>
                <p className='sports-container__topics__paragraph'>Campeonato Brasilerio muda de formato
                mais uma vez em menos de 10 anos.
                </p>
                <div className='sports-container__topics__topics-related'>
                    <span>Sport Club Internacional</span><span>Sport Club Internacional</span>
                </div>
            </div>

            <div className='sports-container__topics'>
                <span className='sports-container__topics__title'>Campeonato Brasileiro</span>
                <p className='sports-container__topics__paragraph'>Campeonato Brasilerio muda de formato
                mais uma vez em menos de 10 anos.
                </p>
                <div className='sports-container__topics__topics-related'>
                    <span>Sport Club Internacional</span><span>Sport Club Internacional</span>
                </div>
            </div>

            <div className='sports-container__topics'>
                <span className='sports-container__topics__title'>Campeonato Brasileiro</span>
                <p className='sports-container__topics__paragraph'>Campeonato Brasilerio muda de formato
                mais uma vez em menos de 10 anos.
                </p>
                <div className='sports-container__topics__topics-related'>
                    <span>Sport Club Internacional</span><span>Sport Club Internacional</span>
                </div>
            </div>

            <div className='sports-container__topics'>
                <span className='sports-container__topics__title'>Campeonato Brasileiro</span>
                <p className='sports-container__topics__paragraph'>Campeonato Brasilerio muda de formato
                mais uma vez em menos de 10 anos.
                </p>
                <div className='sports-container__topics__topics-related'>
                    <span>Sport Club Internacional</span><span>Sport Club Internacional</span>
                </div>
            </div>

            <div className='sports-container__topics'>
                <span className='sports-container__topics__title'>Campeonato Brasileiro</span>
                <p className='sports-container__topics__paragraph'>Campeonato Brasilerio muda de formato
                mais uma vez em menos de 10 anos.
                </p>
                <div className='sports-container__topics__topics-related'>
                    <span>Sport Club Internacional</span><span>Sport Club Internacional</span>
                </div>
            </div>
        </section>
    )
}


const mapStatetoProps = state => ({
    realTime: state.realTime.realTime

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Sports)