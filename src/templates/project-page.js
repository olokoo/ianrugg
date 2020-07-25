import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title + ' - Ian Rugg'}
          description={post.frontmatter.description || post.excerpt}
        />
        <article style={{paddingBottom: '40px'}}>
          <header>
            <div className="header-image-container" style={{paddingBottom: '40px'}}>
              <Img fluid={post.frontmatter.headerImage.childImageSharp.fluid} />
              <h1>{post.frontmatter.title}</h1>
              <a href={post.frontmatter.projectUrl} className="visit-site-link" target="_new">Visit site</a>
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        projectUrl
        headerImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
