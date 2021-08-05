import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import TravelsList from "../components/TravelsList"
import Seo from "../components/Seo"

const Contact = ({ data }) => {
  const travels = data.allContentfulVoyages.nodes
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contactez un conseiller.</h3>
            <p>
              Une envie, une question ? Prenez contact avec un conseiller. Une question concernant un futur voyage ? </p>
            <p> Il vous suffit de remplir notre formulaire et un conseiller vous recontacte dans les meilleurs délais.</p>
          </article>
          <article>
            <form className="form contact-form"
             action="https://formspree.io/f/mrgryrqg"
              method="POST">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-voyages">
          <h5>Plannifiez vos vacances!</h5>
          <TravelsList travels={travels} />
        </section>
         
      </main>
    </Layout>
  )
}

export const query = graphql`
{
    allContentfulVoyages(
      sort: {fields: title, order: ASC}
      filter: {fonctionnalites: {eq: true}}
    ) {
      nodes {
        id
        title
        titre2
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
