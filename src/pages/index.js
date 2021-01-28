import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
// import '../css/index.css'; // add some style if you want!
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

// import React from "react"
// import { graphql } from "gatsby"

// export default function Index({ data }) {
//     const { edges: posts } = data.allMarkdownRemark
//     return (
//         <div className="blog-posts">
//             {posts
//                 .filter(post => post.node.frontmatter.title.length > 0)
//                 .map(({ node: post }) => {
//                     return (
//                         <div className="blog-post-preview" key={post.id}>
//                             <div
//                                 className="blog-post-content"
//                                 dangerouslySetInnerHTML={{ __html: post.html }}
//                             />
//                         </div>
//                     )
//                 })}
//         </div>
//     )
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           id
//           html
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//           }
//         }
//       }
//     }
//   }
// `