const colorPalette = document.querySelector("#color-palette");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  colorPalette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add("color");
    colorPalette.appendChild(colorDiv);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
