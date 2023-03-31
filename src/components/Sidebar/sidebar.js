import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


import './sidebar.css';


const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query MainContent {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                    category
                    title
                    url
                    }
                    html
                    id
            }
            }
        }
    `)
    const {nodes} = data.allMarkdownRemark;
return(
    <nav>
        <h3>Содержание</h3>
        {/* <ul>
            <li><Link to="../../lections/lection1">Лекция 1</Link></li>
            <li><Link to="../../lections/lection2">Лекция 2</Link></li>
            <li><Link to="../../lections/lection3">Лекция 3</Link></li>
            <li><Link to="../../lections/lection4">Лекция 4</Link></li>
            <li><Link to="../../lections/lection5">Лекция 5</Link></li>
        </ul> */}
        <div className="lections">
            {nodes.map(lection => {
                const {category, title, url} = lection.frontmatter;
                return <div className="lection" key={lection.id}><Link to={`/${category}/${url}`}>{title}</Link></div> 
            })}
        </div>
        
    </nav>
)}

export default Sidebar

// export const query = graphql`
//   query MainContent {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           category
//           title
//           url
//         }
//         html
//         id
//       }
//     }
//   }
// `