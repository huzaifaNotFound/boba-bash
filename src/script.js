let i = 0;
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

  img.src = `/public/images/${i + 1}.jpg`;
  img.alt = `Spooky image ${i + 1}`;

  i = (i + 1) % 10;

  if (!hasClicked) {
    hasClicked = true;
    btn.textContent = "Click for more spooky vibes";
  }
});