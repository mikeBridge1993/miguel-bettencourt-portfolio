import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header>
  <nav className="navbar navbar-expand-md p-0 navbar-light">
    <div className="width-container-header">
      <div className="brand">
        <button className="text-dark mt-3 mb-2 navbar-toggler p-0 navigation mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <input type="checkbox" className="navigation__checkbox"  id="navi-toggle"/>
          <label htmlFor="navi-toggle"   className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>
        </button>
        <Link className="navbar-brand" to="/"><div className="brand__text"><span>Miguel</span> <span>Bettencourt</span></div></Link> 
      </div> 
      <div className="list">
        <div className="collapse navbar-collapse" id="navbarNavDropdown"> 
          <ul className="navbar-nav ml-auto d-flex align-items-center justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link to="/animation/" className="nav-link">ANIMATION</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CHARACTER DESIGN
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link  className="dropdown-item" to="/juggler/">JUGGLER</Link>
                <Link className="dropdown-item" to="/indegenous-tribe/">INDEGENOUS TRIBE</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              ILLUSTRATION
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/night-lover/">NIGHT LOVER</Link>
                <Link className="dropdown-item" to="/porto-city/">PORTO CITY</Link>
                <Link className="dropdown-item" to="/sketchbook/">SKETCHBOOK</Link>
                <Link className="dropdown-item" to="/others/">OTHERS</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link">ABOUT</Link>
              </li>
              <li className="nav-item  mr-0">
              <Link to="/contact/" className="nav-link">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
