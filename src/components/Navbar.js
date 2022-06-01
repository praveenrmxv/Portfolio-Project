import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.Contactme}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.google.com/search?q=linkedin+login&oq=linkedin+login&aqs=chrome.0.69i59j69i60l3.33892j0j7&sourceid=chrome&ie=UTF-8">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://redpraveenrmxv.blogspot.com/2022/04/about-me.html?zx=6584570b98e83b5e">My Blog</a>     
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.google.com/search?q=linkedin+login&oq=linkedin+login&aqs=chrome.0.69i59j69i60l3.33892j0j7&sourceid=chrome&ie=UTF-8">Linkedin</a>     
        </li>
        
      </ul>
      <div className="form-check form-switch text-light">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired, Contactme: PropTypes.string.isRequired}
// Navbar.defaultProps = {title: 'set title  here', Contactme: 'this is contaact'}
