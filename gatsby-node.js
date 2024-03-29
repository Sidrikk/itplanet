import { onCreateNode } from './src/components/imgAlt';

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query lections {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            url
          }
        }
      }
    }
  `)
  
  

  
  data.allMarkdownRemark.nodes.forEach(node => {
    const { url, category } = node.frontmatter;
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/lection.js'),
      context: {url}
      
    })
  })
}
