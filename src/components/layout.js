import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar"
import Footer from "./footer"

// material ui
import { Container, Box } from "@material-ui/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container maxWidth={"md"}>
        <NavBar siteTitle={data.site.siteMetadata.title} />
        <Box mt={1}>
          <main>{children}</main>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
