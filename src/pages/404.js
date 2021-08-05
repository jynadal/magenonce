import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <Seo title="Page d'erreur 404" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Vous avez vraiment besoin de vacances!</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
