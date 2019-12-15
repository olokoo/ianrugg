import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isHome = location.pathname === rootPath;
    const header = (
      <h1 className="logo">
        <div>
          <Link to={`/`} >
            <img src={'/images/icon.svg'} alt="Ian Rugg" />
          </Link>
        </div>
      </h1>
    );
    return (
      <div>
        <header className="main">
          <div className="container">
            {header}
          </div>
        </header>
        {isHome && <Hero />}
        <main>
          <div className="container">
            {children}
          </div>
        </main>
        <footer>
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
