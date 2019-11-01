import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from '../images/logo/footer.png'

export default function Header({navbarItems}) {
  const [isShowMenu, setShowMenu] = useState(false)
  return (
    <header>
      <div className="container">
        <ul className="desktop-header d-none d-sm-flex justify-content-center list-unstyled m-0">
          {navbarItems.map((navbarItem, i) => (
            <li key={i} className="p-3">
              <a href={navbarItem.href}>{navbarItem.label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-header py-1 d-flex d-sm-none justify-content-between align-items-center">
          <a className="h-100" href="/">
            <img className="h-100" src={Logo} alt="logo" />
          </a>
          <button className="hamburger-div" onClick={() => setShowMenu(!isShowMenu)}>
            <div className={isShowMenu ? 'show' : null} id="hamburger">
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>
      <ul className={`mobile-item d-flex flex-column list-unstyled m-0 d-sm-none${isShowMenu ? ' show' : ''}`}>
        {navbarItems.map((navbarItem, i) => (
          <li key={i} className="py-2 w-100">
            <a className="d-block text-right px-4" href={navbarItem.href}>{navbarItem.label}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}