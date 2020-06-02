import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import Featured from "../components/featured"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Featured data={data} />
    <Box mt={3}>
      <Typography variant="h5" color="textSecondary">
        Recent Posts:
        <hr />
      </Typography>
    </Box>
    <PostCard data={data} />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          title
          slug
          excerpt
          date(formatString: "MMMM DD, YYYY")
          jetpack_featured_media_url
          tags {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
