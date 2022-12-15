// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelector("#palette");

const currentColor = document.querySelector("#current-color"); 

palette.addEventListener('click',(e) => {
  if (e.target.className === 'color'){
    currentColor.style.backgroundColor = e.target.style.backgroundColor;
  }
  });
