import React from "react"
import { graphql } from "gatsby"
import resume from '../data/index.json';
import SEO from "../components/seo";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <SEO />
      
      <h4> {resume.resume} </h4>
      <h5> {resume.listExperience.title} </h5>
      {
        resume.listExperience.experience.map((xp) => (
          <div key={xp.company.toString()}>
            <p>
              <strong> {xp.title}</strong> <br />
              {xp.company}
            </p>
            <ul>
              {
                xp.listDescriptions.map((desc) => (
                  <li key={desc.description} >{desc.description}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
      <h5> Meus trabalhos </h5>
      <>
        {
          posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
            return (
              <div className="flag" key={post.frontmatter.title.toString()}>
                <div className="flag__title">
                  <h5>{post.frontmatter.title}</h5>
                </div>
                <div className="flag__content">
                  <p>{post.excerpt}</p>
                </div>
              </div>


            )
          })
        }
      </>
    </>
  )


}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            tags
            path
          }
        }
      }
    }
  }
`

