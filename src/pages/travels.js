import React from 'react'
import Layout from '../components/Layout'
import AllTravels from '../components/AllTravels'
import TagsList from '../components/TagsList'

const Travels = () => {
    return (
        <Layout>
         <main className="page">
             <TagsList />
             <AllTravels  />
         </main>
            
        </Layout>
    )
}

export default Travels
