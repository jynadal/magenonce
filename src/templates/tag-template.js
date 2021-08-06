import React from 'react'
import {graphql} from "gatsby"
import TravelsList from "../components/TravelsList"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const TagTemplate = ({data, pageContext}) => {
    const travels = data.allContentfulVoyages.nodes
    return (
        <Layout>
            <Seo title={pageContext.tag} />
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-voyages">
                    <TravelsList travels={travels} />
                </div>          
            </main>
        </Layout>
    )
}

export const query = graphql`
query GetTravelByTag($tag: String) {
  allContentfulVoyages(
    sort: {fields: title, order: ASC}
    filter: {contenu: {tags: {eq: $tag}}}
  ) {
    nodes {
      title
      titre2
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`
export default TagTemplate
