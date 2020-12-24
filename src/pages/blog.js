import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogNavigation from '../content/settings/blogNavigation.yml'
import Img from "gatsby-image"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog - Ian Rugg" />
        <div className="blog-menu">
          <ul className="links">
            {blogNavigation.links.map(link => {
              return (
                <li>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="blog-section featured">
          <header className="blog-section-header">
            <div className="eyebrow"></div>
            <div className="blog-section-header-title">
              <span>Featured Articles</span>
            </div>
          </header>
          <section className="blog-list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link to={node.fields.slug} className="no-hover">
                  <article key={node.fields.slug}>
                    <div className="blog-list-left-image">
                      <Img fluid={ node.frontmatter.featuredImage.childImageSharp.fluid } />
                    </div>
                    <div className="blog-list-right-content">
                      <header>
                        <h2>{ title }</h2>
                        <small>{ node.frontmatter.date } - { node.frontmatter.category }</small>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </section>
                    </div>
                  </article>
                </Link>
              )
            })}
          </section>
        </div>
        <div className="blog-section recent">
          <header className="blog-section-header">
            <div className="eyebrow"></div>
            <div className="blog-section-header-title">
              <span>Recent Articles</span>
            </div>
          </header>
        </div>
      </Layout>
    )
  }
}

export default BlogPage

export const blogQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {path: {eq: "/blog"}}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
