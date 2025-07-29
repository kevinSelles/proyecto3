import './button.css';

export function getHeaderButtons(text = "click", header) {
  const button = document.createElement("button")
  button.textContent = text;
  header.appendChild(button)
  return button;
}