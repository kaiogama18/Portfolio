import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import resume from '../data/index.json'

const Index: React.FC = () => {
    return (
        <>
            <SEO />
            <h2> {resume.resume} </h2>
            {/* <Space height={20} /> */}
            <h3> {resume.listExperience.title} </h3>
            {resume.listExperience.experience.map(xp => (
                <div key={xp.company.toString()}>
                    {/* <Space height={10} /> */}

                    <p>
                        <strong> {xp.title}</strong> <br />
                        {xp.company}
                    </p>
                    <p>{xp.descriptions}</p>
                    {/* <Space height={10} /> */}
                    <ul>
                        {xp.listDescriptions.map(desc => (
                            <li key={desc.description}>{desc.description}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Index

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
