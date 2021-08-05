import React from 'react'
import TagsList from './TagsList'
import TravelsList from './TravelsList'

import { graphql, useStaticQuery} from "gatsby"

const query = graphql`
  {
    allContentfulVoyages(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        titre2
        contenu {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
const AllTravels = () => {
  const data = useStaticQuery(query)
  const travels = data.allContentfulVoyages.nodes

    return (
        <section className="voyages-container">
            <h4>Les Voyages</h4>
            <TagsList travels={travels} />
            <TravelsList travels={travels} />             
        </section >
    )
}

export default AllTravels
