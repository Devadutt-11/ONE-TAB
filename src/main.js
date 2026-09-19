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
   
    document.querySelector("#content").innerHTML = `<p>${data.explanation}</p>
    <h3>${data.title}</h3>`;
    document.querySelector("#background").innerHTML = `${media}
    `;
    
  })
  .catch((error) => {
    document.querySelector("#app").innerHTML = `<p>Error loading data: ${error.message}</p>`;
  });
  