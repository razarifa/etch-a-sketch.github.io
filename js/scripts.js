//variable declations;
const container = document.querySelector(".box-container");
let createBoxButton = document.querySelector(".createBox");
let reset = document.querySelector("#reset");
let colorChoice = document.querySelector("#colorChoice");
let pixel = document.querySelector("#pixel");
let color = "#000";
let indicator = document.querySelector("#indicator");
let n = 4;
let mood = document.querySelector("#check");
let checked = true;
let actionMood = true;

indicator.innerText = 4;
pixel.value = 4;
for (let i = 0; i < n; i++) {
 for (let j = 0; j < n; j++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.height = 520 / n - 2 + "px";
  box.style.width = 520 / n - 2 + "px";
  box.style["border"] = `1px solid transparent`;
  container.appendChild(box);
 }
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
   box.style.height = 520 / n - 2 + "px";
   box.style.width = 520 / n - 2 + "px";
   box.style["border"] = `1px solid transparent`;
   container.appendChild(box);
  }
 }
}
function Reset() {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.style["background-color"] = "transparent";
  el.style["border-color"] = "transparent";
 });
}

function erase() {
 this.style["background-color"] = "transparent";
 this.style["border-color"] = "transparent";
}
function changeColor() {
 this.style["background-color"] = color;
 this.style["border-color"] = color;
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
 color = e.target.value;
});
container.addEventListener("click", drawOrErase);
reset.addEventListener("click", Reset);
