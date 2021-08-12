import React from 'react'
import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {BiEuro} from 'react-icons/bi'
import { GoNote} from 'react-icons/go'
import {GiPhone, GiAirplaneDeparture, GiMeal, GiCalendar} from 'react-icons/gi'
import Layout from '../components/Layout'
import slugify from "slugify"
import Seo from "../components/Seo"


const TravelTemplate = ({data}) => {
    const {title,titre2,contenu, description:{description}, lieuxDeDepart, pension,image, duree, prix,
    reference, disponibilite} = data.contentfulVoyages
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
                  <p className="voyage-tags">
                    Catégories : {tags.map((tag,index) => {
                      const slug = slugify(tag, { lower: true})
                      return (<Link to={`/tags/${slug}`} key={index}>
                        {tag}
                      </Link>)
                    })}
                    </p>
               </article> 
             </section>
             <section className="voyage-icons-btns">
              <div className="voyage-icons">
                  {/* tags Pour Prix, Réservation, Réf et VOIR NOS PRIX*/}
                  <article>
                    <BiEuro />
                    <h5>A partir de :</h5>
                    <p >{prix} <span className="ttc">€TTC</span></p>
                  </article>
                  <article>
                    <GiPhone />
                    <h5>Info et résertvation :</h5>
                    <p >01 73 323 323</p>
                  </article>
                  <article>
                    <GoNote />
                    <h5>Réf : <span >{reference}</span></h5>
                  </article>
                  <article>
                    <Link className="btn-reservation" to={disponibilite} target="_blank">
                       Réservation
                      </Link>
                  </article>
                 </div>
                 {/* <div>
                 <button a href={disponibilite}>
                    <Link className="btn-reservation" to={disponibilite} target="_blank">
                       Réservation
                      </Link>
                    </button>
                     <Link to={disponibilite} target="_blank">
                        Voir nos prix 
                      </Link>
                  </div> */}
                
             </section>
             {/* rest of the content */}
             <section className="voyage-content">
              <article>
                <h4>{titre2} - {title}</h4>
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
                    <h5><GiAirplaneDeparture />
                       Lieux de départ</h5>
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
    disponibilite
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default TravelTemplate
