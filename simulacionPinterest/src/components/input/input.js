import './input.css';

export function getInput(header, text = "🔎Buscar") {
  const input = document.createElement("input");
  input.placeholder = text;
  header.appendChild(input);
  return input
}