export function getRandomColors() {
  const posibilities = "0123456789ABCDEF";
  let color = "#";

  for(let i = 0; i < 6; i++) {
    color += posibilities[Math.floor(Math.random() * 16)];
  }
  return color;
}