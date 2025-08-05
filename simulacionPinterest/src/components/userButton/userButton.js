import './userButton.css';

const userImg = [
"https://images.icon-icons.com/2065/PNG/512/notifications_icon_124898.png",
"https://www.svgrepo.com/show/10797/three-dots-black-speech-bubble.svg",
"https://icon-library.com/images/user-profile-icon/user-profile-icon-27.jpg"
];

export function getUserButtons(header) {
  for(let i = 0; i < userImg.length; i++) {

    const userButton = document.createElement("img");
    userButton.src = userImg[i];

    if(i === 0) {
      userButton.classList.add("notification");
    };
    if(i === 1) {
      userButton.classList.add("chat");
    };
    if(i === 2) {
      userButton.classList.add("user");
    };

    header.appendChild(userButton); 
  }
};
