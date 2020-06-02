const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${decodeURIComponent(node.slug)}`,
      component: path.resolve(`./src/templates/blog-post-template.js`),
      context: {
        // pass $slug variable to blog-post.js
        wp_id: node.wordpress_id,
      },
    })
  })

  result.data.allWordpressPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/pages-template.js`),
      context: {
        // pass $slug variable to blog-post.js
        wp_id: node.wordpress_id,
      },
    })
  })
}
//   return graphql(`
//     {
//       allWordpressPost(sort: { fields: [date] }) {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//       allWordpressPage {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allWordpressPost.edges.forEach(({ node }) => {
//       createPage({
//         path: node.slug,
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           // pass $slug variable to blog-post.js
//           slug: node.slug,
//         },
//       })
//     })
//   })
// }
