import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const getMarkdownPosts = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
          }
          excerpt
          id
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
        Gatsby Garb Blog
      </h1>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span style={{ color: "#bbb" }}>
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </>
        )}
      />
    </div>
  </Layout>
)