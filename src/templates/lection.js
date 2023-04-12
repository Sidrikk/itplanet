import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticImage, getImage } from "gatsby"
import { ReactDOM } from "react"


const Lection = ({ data }) => { 
    const { html } = data.markdownRemark;
    const { title, url, category } = data.markdownRemark.frontmatter;
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000);
      // ReactDOM.render(<App />, document.getElementById('root'));
    });
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

