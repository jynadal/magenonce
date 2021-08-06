import React from 'react'
import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {GiCalendar,GiMeal, GiAirplaneDeparture} from 'react-icons/gi'
import Layout from '../components/Layout'
import slugify from "slugify"
import Seo from "../components/Seo"


const TravelTemplate = ({data}) => {
    const {title,titre2,contenu, description:{description}, lieuxDeDepart, pension,image, duree, prix,
    reference} = data.contentfulVoyages
    const pathToImage = getImage(image)
    const {tags, tools, presentation} = contenu
    return (
      <Layout>
          <Seo title={title} description={description} />
          <main className="page">
            <div className="voyage-page">
              {/* hero */}
                 <h2>{title}</h2>
              <section className="voyage-hero"> 
                <GatsbyImage image={pathToImage} alt={title} className="about-img" />
              <article className="voyage-info">
                {/* <h2>{title}</h2> */}
                <h3>{titre2}</h3>
                <p>{description}</p>
                {/* icons */}
                <div className="voyage-icons">
                  <article>
                    <GiAirplaneDeparture />
                    <h5>A partir de :</h5>
                    <p>{prix}</p>
                  </article>
                  <article>
                    <GiMeal />
                    <h5>Info et résertvation :</h5>
                    <p>01 73 323 323</p>
                  </article>
                  <article>
                    <GiCalendar />
                    <h5>Réf : </h5>
                    <p>{reference}</p>
                  </article>
                </div>
                  {/* tags Pour Prix, Réservation, Réf et VOIR NOS PRIX*/}
                  <p className="voyage-tags">
                  {/*
                    Dès <span>Prix</span> €TTC
                     <span></span>
                    Réf : 001001 */}
                     {/* {tags.map((tag,index) => {
                       return (<Link to={`/${tag}`} key={index}>
                        {tag}
                      </Link>)
                    })} */}
                    Catégories : {tags.map((tag,index) => {
                      const slug = slugify(tag, { lower: true})
                      return (<Link to={`/tags/${slug}`} key={index}>
                        {tag}
                      </Link>)
                    })}
                    </p>
              </article> 
            </section>
            {/* rest of the content */}
            <section className="voyage-content">
              <article>
                <h4>Descriptif : {titre2}</h4>
              {presentation.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    {/* <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header> */}
                    <p>{item}</p>
                  </div>
                )
              })}
              </article>
              <article className="second-column">
              <div>
                 {/* tags */}
                  <p className="single-ingredient">
                    
                      <article>
                    <GiAirplaneDeparture />
                    <h5>Lieux de départ</h5>
                    <p>{lieuxDeDepart}</p>
                  </article>
                  <article>
                    <GiMeal />
                    <h5>Pension</h5>
                    <p>{pension}</p>
                  </article>
                  <article>
                    <GiCalendar />
                    <h5>Durée</h5>
                    <p>{duree}</p>
                  </article>
                  </p>
              </div>
              <div>
                <h4>A savoir</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
            </section>

            </div>
          </main>
      </Layout>
    )
}

export const query = graphql`
  query getSingleVoyage($title: String) {
  contentfulVoyages(title: {eq: $title}) {
    title
    contenu {
      tags
      tools
      presentation
    }
    description {
      description
    }
    lieuxDeDepart
    pension
    titre2
    duree
    prix
    reference
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default TravelTemplate
