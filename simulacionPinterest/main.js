import { getPhotos } from './src/components/getPhotos/getPhotos';
import { getHeaderButtons } from './src/components/button/button';
import { getInput } from './src/components/input/input';
import { getUserButtons } from './src/components/userButton/userButton';
import { modalLogin } from './src/components/modalLogin/modalLogin';
import { getFooter } from './src/components/footer/footer';
import './style.css';

const header = document.createElement("header");
document.body.prepend(header);

const leftContainer = document.createElement("div");
const centerContainer = document.createElement("div");
const rightContainer = document.createElement("div");

leftContainer.classList.add("header-left");
centerContainer.classList.add("header-center");
rightContainer.classList.add("header-right");

header.append(leftContainer, centerContainer, rightContainer);

const logo = document.createElement("img");
logo.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png";
leftContainer.appendChild(logo);
logo.addEventListener("click", loadPhotos);

const main = document.createElement("main");
document.body.appendChild(main);
const modal = modalLogin();
loadPhotos();

const buttons = ["Inicio", "Explorar", "Crear"];
for(let text of buttons) {
  const btn = getHeaderButtons(text, leftContainer);

  if(text === "Inicio") {
    btn.addEventListener("click", loadPhotos)
  }
  if(text === "Explorar") {
    btn.addEventListener("click", loadExploreButton)
  }
  if(text === "Crear") {
    btn.addEventListener("click", () => {
      modal.style.display = "flex"
  })
  }
}

const input = getInput(centerContainer);

input.addEventListener("keydown", (event) => {
  if(event.key === "Enter" && input.value !== "") {
    const search = input.value;
    main.innerHTML = "";
    getPhotos(main, 20, search);
    input.value = "";
  }
})

getUserButtons(rightContainer);
const notificationButton = document.querySelector(".notification");
const chatButton = document.querySelector(".chat");
const userButton = document.querySelector(".user");

notificationButton.addEventListener("click", () => {
  modal.style.display = "flex";
})
chatButton.addEventListener("click", () => {
  modal.style.display = "flex";
})
userButton.addEventListener("click", () => {
  window.open("https://www.pinterest.com/join/", "_blank");
})

function loadPhotos() {
  main.innerHTML = "";

  getPhotos(main);
}

function loadExploreButton() {
  main.innerHTML = "";

  getPhotos(main, 20, "adventure");
}

getFooter();
