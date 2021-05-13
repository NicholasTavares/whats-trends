import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import { getInterestByRegion } from '../../redux/actions/trendsActions'

const Region = ({ region, getInterestByRegion }) => {

    useEffect(() => getInterestByRegion('Harry Potter'), [])

    return (
        <div className='trend'>
            <div className='region_container'>

            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    region: state.trend.region

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getInterestByRegion }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Region)