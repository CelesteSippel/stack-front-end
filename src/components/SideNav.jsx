import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
const world = <FontAwesomeIcon icon={faGlobeAmericas} />

const SideNav = () => {
  return (
    <>
      <nav className="side-nav">
        <a className="side-nav-link">Home</a>
        <a className="side-nav-link" href="#">
          Public
        </a>
        <div className="side-nav-tab">
          <a href="#">{world} Stack Overflow</a>
          <a href="#">Tags</a>
          <a href="#">Users</a>
          <a href="#">Jobs</a>
        </div>
        <a href="#">Teams</a>
      </nav>
    </>
  )
}

export default SideNav
