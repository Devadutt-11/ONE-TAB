const API_KEY = import.meta.env.VITE_NASA_API_KEY;
document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    let media;
    if (data.media_type === "image") {
        media = `<img src="${data.url}" alt="${data.title}" />`;
    } else if (data.media_type === "video") {
        media = `<iframe src="${data.url}" controls></iframe>`;
    } else {
        media = `<video src="${data.url}" controls></video>`;    
    }
    document.querySelector("#app").innerHTML = `
      <h3>${data.title}</h3>
      ${media}
      
    `;
    document.querySelector("#explanation").innerHTML = `<p>${data.explanation}</p>`;
  })
  .catch((error) => {
    document.querySelector("#app").innerHTML = `<p>Error loading data: ${error.message}</p>`;
  });
  