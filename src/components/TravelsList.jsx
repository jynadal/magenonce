import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TravelsList = ({travels = [] }) => {
   
    return (
        <div className="voyages-list">
            {travels.map(travel=> {
                const {id,title, title2, image } = travel;
                const pathToImage = getImage(image)
                return (
                <Link key={id} to={`/${title}`} className="voyage">
                    <GatsbyImage 
                     image={pathToImage}
                     className="voyage-img"
                     alt={title}
                    />
                    <h5>{title}</h5>
                    <p>{title2}</p>

                </Link>
                )
            })}            
        </div>
    )
}

export default TravelsList
