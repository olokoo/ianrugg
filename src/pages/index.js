import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Ian Rugg" />
        <section className="portfolio">
          <div className="column --left">
            <article className="project-card">
              <div className="image-container"></div>
              {/* <img src="https://olokoo.com/olokoo.com/wp2018/wp-content/uploads/2018/08/NotesWithCode.jpg" /> */}
              <div className="project-content">
                <h5>Russel Athletic</h5>
              </div>
            </article>
            <article className="project-card">
              <div className="image-container"></div>
              {/* <img src="https://olokoo.com/olokoo.com/wp2018/wp-content/uploads/2018/08/NotesWithCode.jpg" /> */}
              <div className="project-content">
                <h5>Bulwark</h5>
              </div>
            </article>
          </div>
          <div className="column --right">
            <article className="project-card">
              <div className="image-container"></div>
              {/* <img src="https://olokoo.com/olokoo.com/wp2018/wp-content/uploads/2018/08/NotesWithCode.jpg" /> */}
              <div className="project-content">
                <h5>RedKap</h5>
              </div>
            </article>
            <article className="project-card">
              <div className="image-container"></div>
              {/* <img src="https://olokoo.com/olokoo.com/wp2018/wp-content/uploads/2018/08/NotesWithCode.jpg" /> */}
              <div className="project-content">
                <h5>Remindly.xyz</h5>
              </div>
            </article>
          </div>
        </section>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`
