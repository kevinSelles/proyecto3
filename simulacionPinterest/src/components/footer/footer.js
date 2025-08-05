import './footer.css';

export function getFooter () {
const footer = document.createElement('footer');

const infoFooter = document.createElement('p');
infoFooter.textContent = 'Simulation of Pinterest website as an academic project by student Kevin Selles';

const contactoFooter = document.createElement('a');
contactoFooter.textContent = 'Contact me';
contactoFooter.href = 'mailto:kevin.selles.c@gmail.com';
contactoFooter.target = '_blank';

footer.appendChild(infoFooter);
footer.appendChild(contactoFooter);

document.body.appendChild(footer);

return footer;
}