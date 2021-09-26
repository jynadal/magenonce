import React from 'react'
import Layout from '../components/Layout'
import AllTravels from '../components/AllTravels'
import Seo from '../components/Seo'

const Travels = () => {
    return (
        <Layout>
            <Seo title="Voyages" />
         <main className="page">
             <AllTravels  />
         </main>
            
        </Layout>
    )
}

export default Travels
