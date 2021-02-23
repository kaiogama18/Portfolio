import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import resume from '../data/index.json'
import { Space } from '../styles/styles'
export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <>
          <SEO />
            <h2> {resume.resume} </h2>
            {/* <Space height={50} /> */}
            <h3> {resume.listExperience.title} </h3>
            {/* <Space height={20} /> */}
            {resume.listExperience.experience.map(xp => (
                <div key={xp.company.toString()}>
                    <p>
                        <strong> {xp.title}</strong> <br />
                        {xp.company}
                    </p>
                    <ul>
                        {xp.listDescriptions.map(desc => (
                            <li key={desc.description}>{desc.description}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <Space height={15} />
            {/* <h3> Meus trabalhos </h3>
            <Space height={15} />
            <Container>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div
                                className="flag"
                                key={post.frontmatter.title.toString()}
                            >
                                <div className="flag__title">
                                    <h5>{post.frontmatter.title}</h5>
                                </div>
                                <div className="flag__content">
                                    <p>{post.excerpt}</p>
                                </div>
                            </div>
                        )
                    })}
            </Container> */}
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
