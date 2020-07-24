import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Ian Rugg" />
        <section className="portfolio">
          <div className="column --left">
            <Link to={`/projects/russell-athletic`} className="project-card-link">
              <article className="project-card">
                <div className="image-container">
                  <img src="/images/portfolio/russell-athletic-logo.png" />
                </div>
                <div className="project-content">
                  <h3 className="project-name">Russel Athletic</h3>
                  <a className="view-project-link">View Project</a>
                </div>
              </article>
            </Link>
            <Link to={`/projects/bulwark`} className="project-card-link">
              <article className="project-card">
                <div className="image-container">
                  <img src="/images/portfolio/bulwark-logo.png" />
                </div>
                <div className="project-content">
                  <h3 className="project-name">Bulwark</h3>
                  <a className="view-project-link">View Project</a>
                </div>
              </article>
            </Link>
          </div>
          <div className="column --right">
            <Link to={`/projects/new-balance-team`} className="project-card-link">
              <article className="project-card">
                <div className="image-container">
                  <img className="nbteam-logo" src="/images/portfolio/nbteam-logo.png" />
                </div>
                <div className="project-content">
                  <h3 className="project-name">New Balance Team</h3>
                  <a className="view-project-link">View Project</a>
                </div>
              </article>
            </Link>
            <Link to={`/projects/redkap`} className="project-card-link">
              <article className="project-card">
                <div className="image-container">
                  <img className="redkap-logo" src="/images/portfolio/redkap-logo.png" />
                </div>
                <div className="project-content">
                  <h3 className="project-name">RedKap</h3>
                  <a className="view-project-link">View Project</a>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Index

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
