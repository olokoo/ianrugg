/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import Image from "gatsby-image"
import { Link } from "gatsby"


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-heading-wrapper">
          <div className="hero-heading">
            I build websites.
          </div>
        </div>
        <div class="hero-content">
          <p>My name is Ian Rugg and I like to build stuff. All different sorts of stuff. But professionally, I build websites with my friends at <a href="https://redvanworkshop.com" target="_new">Red Van Workshop!</a></p>
        </div>
      </div>
    </section>
  )
}


export default Hero
