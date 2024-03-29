import React from "react"
import { Link } from "gatsby"

import Hero from '../components/hero'
import navigation from '../content/settings/navigation.yml'

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
          <input id="toggle" type="checkbox" />
          <label class="toggle-container" for="toggle">
            <div className="menu-btn"></div>
          </label>
          <div className="nav-menu-wrapper">
            <div className="nav-menu-inner">
              <ul className="links">
                {navigation.links.map(link => {
                  return (
                    <li>
                      <Link to={link.path} className="no-hover" >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
          <script data-ad-client="ca-pub-7587637902084377" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <div className="container">
            <div className="split-50">
              <div className="footer-text">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://olokoo.com" target="_new">Olokoo</a>
              </div>
            </div>
            <div className="split-50 text-right">
              <a href="https://trailblazer.me/id/ianrugg" target="_new" class="no-hover">
                <img class="certification-badge" src={'/images/certifications/SF_B2C_Developer_Certification.png'} alt="Certified Commerce Cloud Digital Developer." />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
