import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Box from "@material-ui/core/Box"

const SitePages = ({ data }) => {
  const page = data.wordpressPage
  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} />
      <Box mt={10}>
        {page.title}
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($wp_id: Int!) {
    wordpressPage(wordpress_id: { eq: $wp_id }) {
      title
      excerpt
      content
    }
  }
`

export default SitePages
