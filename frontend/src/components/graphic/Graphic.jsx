import React from 'react'

const Graphic = ({ height_graph }) => {
    let width = `{width: ${height_graph}}`
    return (
        <div className='grafic'>
            <span className="grafic__podium">
                1
            </span>
            <span className="grafic__title">
                Flamengo
            </span>
            <span className="grafic__popularity">
                100k
            </span>
        </div>
    )
}
export default Graphic