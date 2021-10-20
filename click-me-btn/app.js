const btn = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const makeRandomColor = () => {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", () => {
  const newColor = makeRandomColor();
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});
