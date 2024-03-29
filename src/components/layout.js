/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "./layout.css"
import Sidebar from "./Sidebar/sidebar"
import Main from "./Main/main"
import Special from "./Special/special"

import { onCreateNode } from "./imgAlt"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Special></Special>
      <div className="main-content">
        <Sidebar></Sidebar>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
