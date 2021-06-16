let container = document.querySelector(".box-container");
let createBoxButton = document.querySelector(".createBox");
let reset = document.querySelector("#reset").addEventListener("click", Reset);
let colorChoice = document.querySelector("#colorChoice");
let pixel = document.querySelector("#pixel");
let color = "#000";
let indicator = document.querySelector("#indicator");
let n;
let mood = document.querySelector("#check");
let checked = true;
let actionMood = true;

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
  el.style["background-color"] = "white";
  el.style["border-color"] = "white";
 });
}

function erase() {
 this.style["background-color"] = "white";
 this.style["border-color"] = "white";
}
function changeColor() {
 this.style["background-color"] = color;
 this.style["border-color"] = color;
}
mood.addEventListener("change", () => {
 checked = mood.checked;
 if (checked) {
  [...container.querySelectorAll(".box")].forEach((el) => {
   el.removeEventListener("mouseover", changeColor);
  });
 } else {
  [...container.querySelectorAll(".box")].forEach((el) => {
   el.removeEventListener("mouseover", changeColor);
  });
 }
});
function myFun() {
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
pixel.addEventListener("change", createBox);

colorChoice.addEventListener("change", (e) => {
 color = e.target.value;
});
container.addEventListener("click", myFun);
