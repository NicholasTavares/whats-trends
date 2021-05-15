import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Region from '../region/Region'

// JSX
import TopTrendsBrasil from './TopTrendsBrasil'

const CarouselContiner = ({ daily }) => {

    return (
        <div className="container-daily__side-trends">
            {daily ? <Carousel autoFocus={true} interval={8500} infiniteLoop={true} autoPlay={true} axis={'horizontal'} showStatus={false} showThumbs={false}
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <FiChevronLeft style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', left: '-6', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                    )
                } renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <FiChevronRight style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', right: '-6', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                    )
                }>





                {daily ? daily.todayTrends.map((trend, i) => (
                    <TopTrendsBrasil key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles} />
                )) : ''}
            </Carousel> : 'Loading...'}
            <Region />
        </div>
    )
}

export default CarouselContiner