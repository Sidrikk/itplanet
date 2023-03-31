import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Lection = ({ data }) => { 
    const { html } = data.markdownRemark;
    const { title, url, category } = data.markdownRemark.frontmatter;
return (
  <Layout>
    <Seo title={title}></Seo>
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  </Layout>
)}

// export const Head = () => <Seo title="Лекция" />

export default Lection

export const query = graphql`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
        frontmatter {
            title
            category
            url
        }
        html
        }
    }
`;