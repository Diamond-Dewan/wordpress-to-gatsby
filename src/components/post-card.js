import React from "react"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"

const PostCard = ({ data }) => {
  return data.allWordpressPost.edges.map(({ node }) => {
    const ex = node.excerpt.split("।")
    let excerpt = ""
    ex.slice(0, 4).map(line => (excerpt = excerpt + line + "।"))
    console.log(excerpt)
    return (
      <Box marginBottom={2} position="static">
        <Card>
          <Grid container justify="space-evenly" spacing={1}>
            <Grid item xs={12} sm={5} md={4}>
              <CardMedia
                component="img"
                height="100%"
                image={node.jetpack_featured_media_url}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
              <div style={{ width: "100%" }}>
                <Link
                  to={`/post/${node.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardContent>
                    <Typography component="h6" variant="h6">
                      {node.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {node.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    </Typography>
                  </CardContent>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Box>
    )
  })
}

// export const pageQuery = graphql`
//   query {
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           wordpress_id
//           title
//           slug
//           excerpt
//           date(formatString: "MMMM DD, YYYY")
//           jetpack_featured_media_url
//           tags {
//             name
//           }
//         }
//       }
//     }
//   }
// `

export default PostCard
