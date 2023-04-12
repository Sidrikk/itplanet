import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ReactDOM } from "react";

import './sidebar.css';


const Sidebar = () => {
    import('react-axe').then(axe => {
        axe.default(React, ReactDOM, 1000);
        // ReactDOM.render(<App />, document.getElementById('root'));
      });
    const data = useStaticQuery(graphql`
    query MainContent {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                    category
                    title
                    url
                    index
                    }
                    html
                    id
            }
            }
        }
    `)
    const {nodes} = data.allMarkdownRemark;
    console.log(nodes);
return(
    <nav>
        <h3>Содержание</h3>
        
        <div className="lections">
            {nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index).map(lection => {
                const {category, title, url} = lection.frontmatter;
                return <div className="lection" key={lection.id}><Link to={`/${category}/${url}`}>{title}</Link></div> 
            })}
        </div>
       
    </nav>
)}

export default Sidebar

