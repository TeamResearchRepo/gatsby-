import React from 'react'
import Link from 'gatsby-link'
import Search from "../components/Search/search.js";
const ProductPost = ({ node }) => {
  return (
    <div>
      <h3>{node.productId}.{node.productName}</h3>
      <p>{node.productDescription.productDescription}</p>
    </div>
  )
}


const IndexPage = (props) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <hr />
      {props.data.allContentfulProduct.edges.map((edge) => <ProductPost key={edge.node.id} node={edge.node} />)}
    </div>
  )
}
export default IndexPage

export const pageQuery = graphql`
    query pageQuery {

      allContentfulProduct (
        filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [productId], order: ASC
            }
      )
      {
        edges {
          node {
            id
            productId
            productName
            productDescription{
              productDescription
            }
          }
        }
    }  
  }
`