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
                    topic
                }
                html
                id
            }
        }
    }
    `)
    const {nodes} = data.allMarkdownRemark;

    const topics = {};
    nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index).forEach(lection => {
        const {category, title, url, topic} = lection.frontmatter;
        if (!topics[topic]) {
            topics[topic] = [];
            topics[topic].push(<div className="lection" key={lection.id}><Link to={`/${category}/${url}`}>{title}</Link></div>)
        } else {
            topics[topic].push(<div className="lection" key={lection.id}><Link to={`/${category}/${url}`}>{title}</Link></div>)
        }
        
    })

    // console.log(topics);
return(
    <nav>
        <h3>Содержание</h3>

        {/* <div className="topics">
            {Object.keys(topics).map((topic, i) => {
                return (
                    <div>
                        <p>Тема - {i}</p>
                        <ul>
                            <li>{topic}</li>
                        </ul>
                    </div>
                )
            })}
        </div> */}


        <div className="lections">
            {nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index).map(lection => {
                const {category, title, url} = lection.frontmatter;
                return <div className="lection" key={lection.id}><Link to={`/${category}/${url}`}>{title}</Link></div> 
            })}
        </div>
        
        
       
    </nav>
)}

export default Sidebar

