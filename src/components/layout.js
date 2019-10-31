/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
