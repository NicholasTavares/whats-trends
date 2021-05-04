import React from 'react'

const SideTrends = ({ podium, title, popularity, article, linkArticle, TimeArticle, SourceArticle }) => {

    return (
        <div className='trend'>
            <span className="trend__podium">{podium}</span>
            <span className="trend__popularity">{popularity}</span>
            <div className="trend__title">
                {title}
            </div>
            <div className="trend__articles">
                <a className="trend__articles__item" target="_blank"
                    rel="noopener noreferrer" href={linkArticle}>{article}</a>
            </div>
            <div className="trend__related">
                <span>{TimeArticle} por <strong>{SourceArticle}</strong></span>
            </div>

        </div>
    )
}
export default SideTrends