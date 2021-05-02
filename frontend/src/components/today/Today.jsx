import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import { getDailyTrends } from '../../redux/actions/trendsActions'
import Graphic from '../graphic/Graphic'

const Today = props => {

    useEffect(() => props.getDailyTrends(), [])

    console.log(props.countryDaily)

    let podium = 0

    return (
        <div className='container-daily'>
            <div className='container-daily__container-graphic'>
                <div>
                    Mais pequisadas do dia
                </div>
                {props.countryDaily ? props.countryDaily.todayTrends.map(t => {
                    podium++
                    return (
                        <Graphic podium={podium} title={t.title.query} popularity={t.formattedTraffic} />
                    )
                }) : 'Loading'}
            </div>
            <div className='container-daily__container-search'>

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