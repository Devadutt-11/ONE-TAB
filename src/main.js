const API_KEY = import.meta.env.VITE_NASA_API_KEY;
document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    const media = data.media_type === "image"
      ? `<img src="${data.url}" alt="${data.title}">`
      : `<video src="${data.url}" controls></video>`;

    document.querySelector("#app").innerHTML = `
      <h3>${data.title}</h3>
      ${media}
      <p>${data.explanation}</p>
    `;
  });