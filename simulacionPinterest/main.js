import './style.css'

const header = document.createElement("header");
const logo = document.createElement("img");
logo.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png";
const title = document.createElement("h1");
title.textContent = "Pinterest Simulator";

header.appendChild(logo);
header.appendChild(title);
document.body.prepend(header);

const main = document.createElement("main");
document.body.appendChild(main);

const apiKey = "m9-8m92WwSq9lSdZX4Dz0VPfrNWIVI0oB8VDE-Dd3IA";

fetch("https://api.unsplash.com/photos/random?count=15", {
  headers: {
    Authorization: `Client-ID ${apiKey}`
  }
})
.then((res) => res.json())
.then((photos) => {
  console.log(photos)

  for(const photo of photos) {
    const img = document.createElement("img");
    img.src = photo.urls.small;
    main.appendChild(img);
  }
}) 