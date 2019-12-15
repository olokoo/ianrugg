import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Ian Rugg" />
				<form name="contact" method="POST" data-netlify="true">
					<p>
						<label>Your Name: <input type="text" name="name" /></label>
					</p>
					<p>
						<label>Your Email: <input type="email" name="email" /></label>
					</p>
					<p>
						<label>Message: <textarea name="message"></textarea></label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
