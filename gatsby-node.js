const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTravels {
      allContentfulVoyages {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  
result.data.allContentfulVoyages.nodes.forEach(travel => {
  travel.contenu.tags.forEach(tag =>{
    const tagSlug = slugify(tag, { lower:true })
       createPage({
        path: `/tags/${tagSlug}`,
      component: path.resolve(`src/templates/tag-template.jsx`),
      context: {
          tag: tag,
        },
    })
  })
})
}
