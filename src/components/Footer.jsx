import React from 'react'
import Logo from '../images/so-icon.png'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="col">
          <div className="footer-logo">
            <img src={Logo} alt="Stack OverFlow Icon" />
            <h3>Stack Overflow</h3>
          </div>
          <ul>
            <li>Questions</li>
            <li>Jobs</li>
            <li>Developer Jobs Directory</li>
            <li>Salary Calculator</li>
            <li>Help</li>
            <li>Mobile</li>
            <li>Disable Responsiveness</li>
          </ul>
        </section>
        <section className="col">
          <h3>Products</h3>
          <ul>
            <li>Teams</li>
            <li>Talent</li>
            <li>Advertising</li>
            <li>Enterprise</li>
          </ul>
        </section>
        <section className="col">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="col">
          <h3>Stack Exchange Network</h3>
          <ul>
            <li>Technology</li>
            <li>Life/Arts</li>
            <li>Culture / Recreation</li>
            <li>Science</li>
            <li>Other</li>
          </ul>
        </section>
        <section className="col right">
          <ul className="social-media">
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          <p className="site-credits">
            site design / logo © 2019 Stack Exchange Inc; user contributions
            licensed under cc by-sa 4.0 with attribution required. rev
            2019.9.25.35007
          </p>
        </section>
      </footer>
    </>
  )
}

export default Footer
