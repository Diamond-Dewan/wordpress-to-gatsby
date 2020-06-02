import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <p>Published on: {post.date} </p>
        <div>Tags: {post.tags[0].name}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($wp_id: Int!) {
    wordpressPost(wordpress_id: { eq: $wp_id }) {
      title
      date(formatString: "MMMM DD,YYYY")
      excerpt
      content
      tags {
        name
        slug
      }
    }
  }
`

export default BlogPost
