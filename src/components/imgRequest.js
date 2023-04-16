export default function imgRequest() {
    const formData = new FormData();

    document.querySelectorAll('main img').forEach(item => {
        fetch(item.src)
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
                item.setAttribute('alt', data.caption)
            })
            .catch(error => {
                console.error("Error:", error);
        });
    })
}



