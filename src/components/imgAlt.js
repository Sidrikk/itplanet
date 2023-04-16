import imgRequest from './imgRequest';

const axios = require('axios');

async function getImageAlt(imageUrl) {
  const formData = new FormData();
  fetch(imageUrl)
    .then(res => res.blob())
    .then(blob => {
        const file = new File([blob], 'img.png', { type: blob.type });
        formData.append('file', file);

        return fetch("http://localhost:8888/predict", {
            method: "POST",
            body: formData
        });
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        console.log('yesss')
        return data.caption
    })
    .catch(error => {
        console.error("Error:", error);
  });
}


function getNodeImages(node) {
  const images = [];
  const findImages = (obj) => {
    if (obj.type === 'image') {
      images.push(obj);
    } else if (obj.children) {
      obj.children.forEach(findImages);
    }
  };
  node.children.forEach(findImages);
  return images;
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const imageNodes = getNodeImages(node);
    for (const imageNode of imageNodes) {
      const { url: imageUrl } = imageNode;
      const alt = await getImageAlt(imageUrl);
      createNodeField({
        node,
        name: 'alt',
        value: alt,
      });
    }
  }
};

