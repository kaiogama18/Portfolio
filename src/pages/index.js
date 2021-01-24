import React from "react"
import { graphql } from "gatsby"

export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div className="blog-posts">
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <div className="blog-post-preview" key={post.id}>
                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
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
          html
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