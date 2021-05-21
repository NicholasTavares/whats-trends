import React from 'react'

// JSX
import Carousel from '../topTrendsBrasil/Carousel'
import Sports from '../topics/Sports'
import Business from '../topics/Business'
import Entertainment from '../topics/Entertainment'
import Region from '../region/Region'

const Today = () => {

    return (
        <div className="container">
            <main className='container-daily'>
                <div className='container-daily__trends'>
                    <Carousel />
                    <Region />
                </div>
                <div className='container-daily__news'>
                    <Business />
                    <Sports />
                    <Entertainment />
                </div>
            </main>
        </div>

    )
}


export default Today