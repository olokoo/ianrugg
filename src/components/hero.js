import React from "react";
import homePage from '../content/settings/home-page.yml';
import ReactMarkdown from 'react-markdown'

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
          <ReactMarkdown>
            { homePage.heroText }
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default Hero
