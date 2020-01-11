import React, { useState } from 'react'
import Logo from '../images/so-logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [postData, setPostData] = useState()
  const getSearchData = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api/Post/searchterm/{PostContent}' + searchTerm
    )
    setPostData(resp.data)
  }
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
          <input
            type="search"
            maxLength="240"
            placeholder="Search Questions"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          ></input>
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
