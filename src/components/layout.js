import React, { useEffect } from "react"
import axios from 'axios'
import PropTypes from "prop-types"
import '../styles/index.scss'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      ywcData {
        navbarItems {
          label
          href
        }
      }
    }
  `)

  return (
    <>
      <Header navbarItems={data.ywcData.navbarItems} />
      <div>
        <main>{children}</main>
      </div>
      <Footer navbarItems={data.ywcData.navbarItems} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
