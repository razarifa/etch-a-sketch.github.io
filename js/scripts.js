//variable declarations
let container = document.querySelector(".box-container");
let createBoxButton = document.querySelector(".createBox");
let remove = document.querySelector(".remove");
let reset = document.querySelector("#reset").addEventListener("click", Reset);
let colorChoice = document.querySelector("#colorChoice");
let pixel = document.querySelector("#pixel");
let color = "#000";
let indicator = document.querySelector("span");
let n;
let eraser = document.querySelector("#eraser");
let draw = document.querySelector("#draw");
//function declarations
function removeBoxes() {
 if (container.children.length !== 0) {
  container.innerHTML = "";
 }
}
function createBox() {
 n = pixel.value;
 indicator.innerText = n;

 removeBoxes();
 for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
   let box = document.createElement("div");
   box.classList.add("box");
   box.style.height = 560 / n - 2 + "px";
   box.style.width = 560 / n - 2 + "px";
   box.style["border"] = `1px solid white`;
   container.appendChild(box);
  }
 }
}
function Reset() {
 [...container.querySelectorAll(".box")].forEach((el) => {
  // el.classList.remove("red");
  el.style["background-color"] = "white";
  el.style["border-color"] = "white";
 });
}

//events
pixel.addEventListener("change", createBox);

colorChoice.addEventListener("change", (e) => {
 color = e.target.value;
});

eraser.addEventListener("click", () => {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.addEventListener("mouseover", () => {
   el.style["background-color"] = "white";
   el.style["border-color"] = "white";
  });
 });
});
draw.addEventListener("click", () => {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.addEventListener("mouseover", () => {
   el.style["background-color"] = color;
   el.style["border-color"] = color;
  });
 });
});
