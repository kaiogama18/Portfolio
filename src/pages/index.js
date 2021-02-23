import { graphql } from 'gatsby'
import React from 'react'
import resume from '../data/index.json'
import { Container, Space } from '../styles/styles'

export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <>
            <h4> {resume.resume} </h4>
            {/* <Space height={50} /> */}
            <h5> {resume.listExperience.title} </h5>
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
            <h5> Meus trabalhos </h5>
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
            </Container>
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
