import React from 'react'

const Graphic = ({ podium, title, popularity }) => {

    const width = (p) => {
        if (popularity === '200K+') {
            return {
                width: '95%',
                backgroundColor: '#FF0700',
            }
        }
        if (popularity === '100K+') {
            return {
                width: '80%',
                backgroundColor: '#FF8012',
            }
        }
        if (popularity === '50K+') {
            return {
                width: '70%',
                backgroundColor: '#2D1BCF',
            }
        }
        if (popularity === '20K+') {
            return {
                width: '60%',
                backgroundColor: '#FF0700',
            }
        }
    }

    console.log(width())

    return (
        <div className='grafic' style={width()} >
            <span className="grafic__podium">
                {podium}
            </span>
            <span className="grafic__title">
                {title}
            </span>
            <span className="grafic__popularity">
                {popularity}
            </span>
        </div>
    )
}
export default Graphic