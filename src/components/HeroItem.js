import React from 'react'
import "./../styles/HeroItem.css"

function HeroItem({hero}) {
    const {name, images} = hero
    return (
        <div className="Card">
            <img className="Card__img"  src={images.lg} alt={name}/>
            <div className="Card__content">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default HeroItem
