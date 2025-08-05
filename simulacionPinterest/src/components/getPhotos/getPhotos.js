import { getRandomColors } from "../randomColors/getRandomColors";
import "./photos.css"

const apiKey = "m9-8m92WwSq9lSdZX4Dz0VPfrNWIVI0oB8VDE-Dd3IA";

export function getPhotos(main , count = 20, query = "") {

  const url = query
  ? `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}`
  : `https://api.unsplash.com/photos/random?count=${count}`;
  
  fetch(url, {
  headers: {
    Authorization: `Client-ID ${apiKey}`
  }
})
.then((res) => res.json())
.then((search) => {
  const photos = search.results || search;

  for(const photo of photos) {
    const container = document.createElement("section");
    container.classList.add("card");

    const img = document.createElement("img");
    img.src = photo.urls.small;

    const userData = document.createElement("div");
    userData.classList.add("user-info");

    const userImg = document.createElement("img");
    userImg.src = photo.user.profile_image.small;
    userImg.alt = `Foto del usuario ${photo.user.name}`;
    userImg.classList.add("profile-photo");
    userImg.style.border = `4px solid ${getRandomColors()}`;

    const userName = document.createElement("span");
    userName.textContent = photo.user.name;

    const date = document.createElement("span");
    const getDate = new Date(photo.created_at);
    date.textContent = `⬆️ ${getDate.toLocaleDateString()}`;
    date.classList.add("date");

    userData.append(userImg, userName, date);
    container.append(img, userData);
    main.append(container);
  }
}) };