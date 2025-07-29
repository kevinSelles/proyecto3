const apiKey = "m9-8m92WwSq9lSdZX4Dz0VPfrNWIVI0oB8VDE-Dd3IA";

export function getPhotos(main , count = 15) {
  fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
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
}) };