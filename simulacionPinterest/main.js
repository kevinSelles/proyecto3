import { getPhotos } from './src/components/getPhotos/getPhotos';
import { getHeaderButtons } from './src/components/button/button';
import { getInput } from './src/components/input/input';
import { getUserButtons } from './src/components/userButton/userButton';
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

const buttons = ["Inicio", "Explorar", "Crear"];
for(let text of buttons) {
  getHeaderButtons(text, leftContainer);
}

getInput(centerContainer);
getUserButtons(rightContainer);


const main = document.createElement("main");
document.body.appendChild(main);
getPhotos(main);
