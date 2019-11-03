import React from "react"
import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"

const getImageData = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          birthTime
          extension
          relativePath
          size
        }
      }
    }
  }
`
//const data = useStaticQuery(getImageData)

export default () => (
  <Layout>
    <div>
      <h1>Hello from page 3</h1>
      <StaticQuery
        query={getImageData}
        render={data => (
          <table>
            <thead>
              <tr>
                <th>Relative Path</th>
                <th>Size of image</th>
                <th>Extension</th>
                <th>Birth time</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, i) => (
                <tr key={i}>
                  <td>{node.relativePath}</td>
                  <td>{node.size}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />

      <Link to="/page-2">Goto to Page 2</Link>
    </div>
  </Layout>
)
