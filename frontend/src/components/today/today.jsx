import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import { getInterestKeyword } from '../../redux/actions/trendsActions'

// TODO: corrigir o nome desse component depois
const Today = props => {

    useEffect(() => props.getInterestKeyword(), [])

    return (
        <div>
            {props.interestSearch ? props.interestSearch : 'Loading...'}
        </div>
    )
}


const mapStatetoProps = state => ({
    interestSearch: state.keyword.interestSearch
})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getInterestKeyword }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Today)