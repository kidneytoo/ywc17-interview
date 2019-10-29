import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage({data}) {
  const {condition, detail, duration} = data.ywcData
  return (
    <Layout>
      <SEO title="Home" />
      <p>{condition}</p>
    </Layout>
  )
}

export const query = graphql`
    query {
        ywcData {
            condition
            detail
            duration
        }
    }
`;
