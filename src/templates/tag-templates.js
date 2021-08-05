import React from 'react'
import {graphql, Link} from "gatsby"
import TravelsList from "../components/TravelsList"
import Layout from "../componenets/Layout"
import Seo from "../components/Seo"

const TagTemplate = ({data, pageContext}) => {
    const travels = data.contentfulVoyages.nodes
    return (
        <Layout>
            <Seo title={pageContext.tag} />
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-voyages">
                    <TravelsList travel={travel} />
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`
export default TagTemplate
