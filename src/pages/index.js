import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllTravels from "../components/AllTravels"

import Seo from "../components/Seo"
export default function Home() {
  return (
    <Layout>
      <Seo title="Accueil" description="Agence de voyage qui vous offres le monde à porter de main." />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/drink.jpg"
            alt="vacances cocktail plage"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Cyclades, Corse, Canaries, Sicile, Djerba ... </h1>
              <h4>Cet été, vos rêves d'évasion seront exaucés!</h4>

            </div>
          </div>
        </header>
        <AllTravels />
      </main>
    </Layout>
  )
}
