import './userButton.css';

const userImg = [
"https://images.icon-icons.com/2065/PNG/512/notifications_icon_124898.png",
"https://www.svgrepo.com/show/10797/three-dots-black-speech-bubble.svg",
"https://icon-library.com/images/user-profile-icon/user-profile-icon-27.jpg"
];

export function getUserButtons(header) {
  for(let imgUrl of userImg) {

    const userButton = document.createElement("img");
    userButton.src = imgUrl;
    header.appendChild(userButton); 
  }
};
