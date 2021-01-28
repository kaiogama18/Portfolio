import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

const Card = styled.div`
  width: 350px;
  height: 200px;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.3rem;
  border-radius: 2px;
  display: inline-block;
  border: 2px solid ${props => props.theme.color};
`;

const Work = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
`;

const Tag = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Work>
      {
        posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
            <Card key={post.id}>
              <h5>{post.frontmatter.title}</h5>
                <div class="mdc-chip-set" role="grid">
                  {post.frontmatter.tags.map((tag) => (<div class="mdc-chip" role="row">
                    <div class="mdc-chip__ripple"></div>
                    <span role="gridcell">
                      <span role="button" tabindex="0" class="mdc-chip__primary-action">
                        <span class="mdc-chip__text">{tag}</span>
                      </span>
                    </span>
                  </div>
                  ))}
                </div>
                <p>{post.excerpt}</p>
            </Card>
          )
        })
      }
    </Work>
  )

  // return posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
  //   return (
  //     <Card key={post.id}>
  //       <h4>{post.frontmatter.title}</h4>
  //       <p>{post.frontmatter.tags}</p>
  //       <p>{post.excerpt}</p>
  //     </Card>
  //   )
  // })

}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 60)
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
