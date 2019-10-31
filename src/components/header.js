import React, { useState } from "react"

import Logo from '../images/logo/footer.png'

export default function Header({navbarItems}) {
  const [isOpen, setOpen] = useState(false)
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
        <div className="mobile-header py-2 d-flex d-sm-none justify-content-between">
          <img className="h-100" src={Logo} alt="logo" />
          <button onClick={() => setOpen(!isOpen)}>
            <div className={isOpen ? 'open' : null} id="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
      <ul className={`mobile-item d-flex flex-column list-unstyled m-0 d-sm-none${isOpen ? ' open' : ''}`}>
        {navbarItems.map((navbarItem, i) => (
          <li key={i} className="py-2 w-100">
            <a className="d-block text-right px-4" href={navbarItem.href}>{navbarItem.label}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}