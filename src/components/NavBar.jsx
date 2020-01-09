import React from 'react'
import Logo from '../images/so-logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header className="top-header">
        <nav className="top-nav">
          <Link to="/">
            <img src={Logo} alt="Stack Overflow Logo" />
          </Link>
          <a href="#">Products</a>
          <a href="#">Customers</a>
          <a href="#">Use Cases</a>
          <input type="text" maxLength="240" placeholder="Search..." />
          <a className="login" href="#">
            Log In
          </a>
          <a className="sign-up" href="#">
            Sign Up
          </a>
        </nav>
      </header>
    </>
  )
}

export default NavBar
