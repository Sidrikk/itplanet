import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticImage, getImage } from "gatsby"
import { ReactDOM } from "react"

import imgAlt from "../components/imgAlt"

const Lection = ({ data }) => { 
    const { html } = data.markdownRemark;
    const { title, url, category } = data.markdownRemark.frontmatter;
    

    // const formData = new FormData();

    // document.querySelectorAll('main img').forEach(item => {
    //     fetch(item.src)
    //         .then(res => res.blob())
    //         .then(blob => {
    //             const file = new File([blob], 'img.png', { type: blob.type });
    //             formData.append('file', file);

    //             return fetch("http://localhost:8888/predict", {
    //                 method: "POST",
    //                 body: formData
    //             });
    //         })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error("Something went wrong");
    //             }
    //         })
    //         .then(data => {
    //             console.log('yesss')
    //             item.setAttribute('alt', data.caption)
    //         })
    //         .catch(error => {
    //             console.error("Error:", error);
    //     });
    // })

    

    
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

