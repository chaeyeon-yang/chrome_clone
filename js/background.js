const images = ["0.jpg", "1.jpeg", "2.jpeg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const BG = "background";
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = BG;

document.body.appendChild(bgImage);