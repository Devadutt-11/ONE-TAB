const API_KEY = import.meta.env.VITE_NASA_API_KEY;
document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then(data => {
        document .querySelector("#app").innerHTML = `
        <h3>${data.title}</h3>
        <img src="${data.url}" />
        <p>${data.explanation}</p>
        `;
    })