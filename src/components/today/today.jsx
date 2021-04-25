import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getToday } from '../../redux/todayActions'

const Today = () => {

    useEffect(() => getSummary())

    return (
        <div>
            Trends
        </div>
    )
}


const mapStatetoProps = state => ({
    today: state.dashboard.today
})
// today vai disparar uma chamada para todos os reducers da aplicação
const mapDispatchToProps = dispatch => bindActionCreators({ getToday }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)