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
				<div className="contact-page">
					<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
						<input type="hidden" name="bot-field" />
						<input type="hidden" name="form-name" value="contact" />
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="6" />
						</div>
						<ul className="actions">
							<li>
								<input type="submit" value="Send Message" className="special" />
							</li>
							<li>
								<input type="reset" value="Clear" />
							</li>
						</ul>
					</form>
				</div>
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
