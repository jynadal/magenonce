import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const TravelsList = ({travels = [] }) => {
   
    return (
        <div className="voyages-list">
            {travels.map(travel=> {
                const {id,title, titre2, image } = travel;
                const pathToImage = getImage(image)
                const slug = slugify(title,{lower:true})
                return (
                <Link key={id} to={`/${slug}`} className="voyage">
                   
                    <GatsbyImage 
                     image={pathToImage}
                     className="voyage-img"
                     alt={title}
                    />
                    <h5>{title}</h5>
                    <h6>{titre2}</h6>

                </Link>
                )
            })}            
        </div>
    )
}

export default TravelsList
