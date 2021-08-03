import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllTravels from "../components/AllTravels"

import Seo from "../components/Seo"
export default function Home() {
  return (
    <Layout>
      <Seo title="Hommmmeeee " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/drink.jpg"
            alt="womens on beach"
            className="hero-img"
            placeholder="tracedSVG"
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
