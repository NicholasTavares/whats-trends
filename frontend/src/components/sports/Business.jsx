import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrendsBusiness } from '../../redux/actions/trendsActions'

const Business = ({ business, getRealTimeTrendsBusiness }) => {

    useEffect(() => getRealTimeTrendsBusiness('e'), [])
    console.log(business)

    return (
        <>
            {business ?
                <section className='sports-container'>
                    <h1 className='sports-container__title'>Negócios</h1>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={business[0].articles[0].url}>
                            {business[0].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {business[0].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{business[0].articles[0].time} por <strong>{business[0].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={business[1].articles[0].url}>
                            {business[1].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {business[1].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{business[1].articles[0].time} por <strong>{business[1].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={business[2].articles[0].url}>
                            {business[2].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {business[2].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{business[2].articles[0].time} por <strong>{business[2].articles[0].source}</strong></span>
                        </div>
                    </div>

                    <div className='sports-container__topics'>
                        <a className='sports-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={business[3].articles[0].url}>
                            {business[3].articles[0].articleTitle.replace(/&#39;/g, "'")}
                        </a>
                        <p className='sports-container__topics__paragraph'>
                            {business[3].articles[0].snippet.replace(/&#39;/g, "'")}
                        </p>
                        <div className='sports-container__topics__related'>
                            <span>{business[3].articles[0].time} por <strong>{business[3].articles[0].source}</strong></span>
                        </div>
                    </div>

                </section> : 'Loading...'}
        </>
    )
}


const mapStatetoProps = state => ({
    business: state.business.business

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsBusiness }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Business)
