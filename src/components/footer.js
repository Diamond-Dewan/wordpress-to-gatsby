import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <Box py={2} mt={2} textAlign="center">
      <Typography al>
        © {new Date().getFullYear()}{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          banglanewshours
        </Link>
      </Typography>
    </Box>
  </footer>
)

export default Footer
