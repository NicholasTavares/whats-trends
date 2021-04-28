import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getToday } from '../../redux/actions/todayActions'

const Today = props => {

    return (
        <div>
            <h1>{props.today}</h1>
        </div>
    )
}


const mapStatetoProps = state => ({
    today: state.today.keyword
})
// today vai disparar uma chamada para todos os reducers da aplicação
const mapDispatchToProps = dispatch => bindActionCreators({ getToday }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)