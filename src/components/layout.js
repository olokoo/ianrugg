import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isHome = location.pathname === rootPath;
    const header = (
      <div className="container">
        <h1 className="logo">
          <div>
            <Link to={`/`} className="no-hover" >
              <img src={'/images/icon.svg'} alt="Ian Rugg" />
            </Link>
          </div>
        </h1>
        <nav>
          <Link to={`/contact`} >
            Contact me
          </Link>
        </nav>
      </div>
    );
    return (
      <div className="page-container">
        <div className="container-wrapper">
          <header className="main">
            {header}
          </header>
          {isHome && <Hero />}
          <main>
            <div className="container">
              {children}
            </div>
          </main>
          </div>
        <footer className="main">
          <div className="container">
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
