const imageNumbers = ["https://ibb.co/xSz3dcMY",
"https://ibb.co/Hp4tnkn8",
"https://ibb.co/N25vCK8t",
"https://ibb.co/gb63krQF",
"https://ibb.co/ns2kd4WW",
"https://ibb.co/wFnc4DQX",
"https://ibb.co/N23cj8jX",
"https://ibb.co/zT0kS5mW",
"https://ibb.co/DTJkqq2",
"https://ibb.co/7Mwgh7b",
"https://ibb.co/fdqxtvMc"]; 
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
  img.src = `https://github.com/huzaifaNotFound/boba-bash/blob/main/public/images/${num}.jpg`;
  img.alt = `Spooky image ${num}`;

  idx = (idx + 1) % imageNumbers.length;

  if (!hasClicked) {
    hasClicked = true;
    btn.textContent = "Click for more spooky vibes";
  }
});