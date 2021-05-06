import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrends } from '../../redux/actions/trendsActions'

const Sports = ({ realTime, getRealTimeTrends }) => {

    useEffect(() => getRealTimeTrends(), [])
    console.log(realTime)

    return (
        <div>
            OPA
        </div>
    )
}


const mapStatetoProps = state => ({
    realTime: state.realTime.realTime

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Sports)