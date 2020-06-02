import React from "react"
// import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
// import ListSubheader from "@material-ui/core/ListSubheader"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}))

export default function Featured({ data }) {
  const classes = useStyles()
  let posts = []
  data.allWordpressPost.edges.map(({ node }) =>
    node.tags[0].name === "covid-19" ? posts.push(node) : null
  )
  return (
    <Box className={classes.root} boxShadow={2} p={1} mt={10}>
      <GridList
        cellHeight={180}
        className={classes.gridList}
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">Featured Posts</ListSubheader>
      </GridListTile> */}
        {posts.slice(0, 4).map(post => (
          <GridListTile key={post.slug}>
            <img src={post.jetpack_featured_media_url} alt={post.title} />
            <Link to={`/post/${post.slug}`}>
              <GridListTileBar
                title={post.title}
                subtitle={<span>{post.date} </span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${post.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </Box>
  )
}

// export const query = graphql`
//   {
//     allWordpressPost(
//       filter: { tags: { elemMatch: { name: { eq: "covid-19" } } } }
//     ) {
//       edges {
//         node {
//           slug
//           jetpack_featured_media_url
//           title
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
// `
