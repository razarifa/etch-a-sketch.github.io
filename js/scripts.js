let container = document.querySelector(".box-container");
let createBoxButton = document.querySelector(".createBox");
let remove = document.querySelector(".remove");

remove.addEventListener("click", removeBoxes);
let num = document.querySelector("#num");
let color = "#000";
let s = document.querySelector("span");

let n;

function createBox() {
 n = num.value;
 s.innerText = n;

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
function removeBoxes() {
 if (container.children.length !== 0) {
  container.innerHTML = "";
 }
}

num.addEventListener("change", createBox);

function Reset() {
 [...container.querySelectorAll(".box")].forEach((el) => {
  // el.classList.remove("red");
  el.style["background-color"] = "white";
  el.style["border-color"] = "white";
 });
}
let reset = document.querySelector("#reset").addEventListener("click", Reset);
let colorChoice = document.querySelector("#colorChoice");
colorChoice.addEventListener("change", (e) => {
 color = e.target.value;
});

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
// [...document.querySelector(".box-container").querySelectorAll(".box")].forEach(
//  (el) => {
//   console.log("hellds");
//   el.addEventListener("click", () => {
//    el.style["background-color"] = color;
//    el.style["border-color"] = color;
//    console.log("heldlo");
//   });
//  }
// );
container.addEventListener("mouseover", () => {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.addEventListener("mouseover", () => {
   el.style["background-color"] = color;
   el.style["border-color"] = color;
  });
 });
});
