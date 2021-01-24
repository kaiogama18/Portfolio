const path = require("path")

const onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: { "react-dom": "@hot-loader/react-dom" },
            },
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

// const onCreateWebpackConfig = ({ stage, actions }) => {
//     if (stage.startsWith("develop")) {
//         actions.setWebpackConfig({
//             resolve: {
//                 alias: { "react-dom": "@hot-loader/react-dom" },
//             },
//         })
//     }
// }
