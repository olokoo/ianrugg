import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isHome = location.pathname === rootPath;
    const header = (
      <h1 class="logo">
        <div>
          <Link to={`/`} >IR</Link>
        </div>
      </h1>
    );
    return (
      <div>
        <header class="main">
          <div class="container">
            {header}
          </div>
        </header>
        {isHome && <Hero />}
        <main>
          <div class="container">
            {children}
          </div>
        </main>
        <footer>
          <div class="container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://olokoo.com">Olokoo Industries</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
