//variable declations;
const container = document.querySelector(".box-container");
let createBoxButton = document.querySelector(".createBox");
let reset = document.querySelector("#reset");
let colorChoice = document.querySelector("#colorChoice");
let pixel = document.querySelector("#pixel");
let color = "";
let indicator = document.querySelector("#indicator");
let n = 4;
let mood = document.querySelector("#check");
let switchBtn = document.querySelector("#switch-btn");
let isRandomColor = false;
let checked = true;
let actionMood = true;
let randomColor = document.querySelector("#random-color");
let dataCount = 0;

indicator.innerText = 4;
pixel.value = 4;
for (let i = 0; i < n; i++) {
 for (let j = 0; j < n; j++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.height = 420 / n - 2 + "px";
  box.style.width = 420 / n - 2 + "px";
  box.style["border"] = `1px solid transparent`;
  box.setAttribute("data-count", 4);
  container.appendChild(box);
 }
}

function hexToRgbA(hex) {
 var c;
 if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
  c = hex.substring(1).split("");
  if (c.length == 3) {
   c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)";
 }
 throw new Error("Bad Hex");
}
function toRgba(rgb) {
 return rgb.replace(")", ", 0.2)").replace("rgb", "rgba");
}

function removeBoxes() {
 if (container.children.length !== 0) {
  container.innerHTML = "";
 }
}
function createBox() {
 actionMood = true;
 n = pixel.value;
 indicator.innerText = n;
 removeBoxes();
 for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
   let box = document.createElement("div");
   box.classList.add("box");
   box.style.height = 420 / n - 2 + "px";
   box.style.width = 420 / n - 2 + "px";
   box.style["border"] = `1px solid transparent`;
   box.setAttribute("data-count", 2);
   container.appendChild(box);
  }
 }
}
function Reset() {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.style["background-color"] = "transparent";
  el.style["border-color"] = "transparent";
  el.setAttribute("data-count", 2);
  container.style["background-color"] = "transparent";
 });
}
function erase() {
 this.style["background-color"] = "transparent";
 this.style["border-color"] = "transparent";
}
function changeColor() {
 container.style["background-color"] = "white";
 if (isRandomColor) {
  color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(color);
  this.style["background-color"] = color;
  this.style["border-color"] = color;
 } else {
  let b;
  if (color === "") {
   color = hexToRgbA("#000");
  }
  dataCount = this.getAttribute("data-count");
  b = color.replace(
   color.substr(color.lastIndexOf(",") + 1, 4),
   `${dataCount <= 9 ? "0." + dataCount++ + ")" : "1)"}`
  );

  this.style["background-color"] = b;
  this.style["border-color"] = b;
  this.setAttribute("data-count", dataCount++);
 }
}

function drawOrErase() {
 if (checked) {
  if (actionMood) {
   [...container.querySelectorAll(".box")].forEach((el) => {
    el.addEventListener("mouseover", changeColor);
   });
  } else {
   [...container.querySelectorAll(".box")].forEach((el) => {
    el.removeEventListener("mouseover", changeColor);
   });
  }
  [...container.querySelectorAll(".box")].forEach((el) => {
   el.removeEventListener("mouseover", erase);
  });
 } else {
  if (!actionMood) {
   [...container.querySelectorAll(".box")].forEach((el) => {
    el.addEventListener("mouseover", erase);
   });
  } else {
   [...container.querySelectorAll(".box")].forEach((el) => {
    el.removeEventListener("mouseover", erase);
   });
  }
  [...container.querySelectorAll(".box")].forEach((el) => {
   el.removeEventListener("mouseover", changeColor);
  });
 }
 actionMood = !actionMood;
}

//events
mood.addEventListener("change", () => {
 checked = mood.checked;
 drawOrErase();
});
pixel.addEventListener("change", createBox);

colorChoice.addEventListener("change", (e) => {
 color = hexToRgbA(e.target.value);
 isRandomColor = false;
 e.target.setAttribute("data-count", 0);
});
container.addEventListener("click", drawOrErase);
reset.addEventListener("click", Reset);
randomColor.addEventListener("click", () => {
 isRandomColor = true;
});
