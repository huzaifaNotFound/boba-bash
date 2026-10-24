const imageNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]; 
let idx = 0;
let hasClicked = false;

const btn = document.getElementById("btn");
const imageContainer = document.getElementById("image-container");

btn.addEventListener("click", () => {
  let img = imageContainer.querySelector("img");

  if (!img) {
    img = document.createElement("img");
    img.className = "h-150";
    imageContainer.appendChild(img);
  }

  const num = imageNumbers[idx];
  img.src = `./public/images/${num}.jpg`;
  img.alt = `Spooky image ${num}`;

  idx = (idx + 1) % imageNumbers.length;

  if (!hasClicked) {
    hasClicked = true;
    btn.textContent = "Click for more spooky vibes";
  }
});