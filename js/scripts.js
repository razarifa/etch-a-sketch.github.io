let container = document.querySelector(".box-container");
let color = "#000";
let n = Number(prompt("nece?"));

for (let i = 0; i < n; i++) {
 for (let j = 0; j < n; j++) {
  let box = document.createElement("div");
  box.style.height = 560 / n - 2 + "px";
  box.style.width = 560 / n - 2 + "px";
  box.style["border"] = `1px solid white`;
  box.classList.add("box");
  container.appendChild(box);
 }
}

[...container.querySelectorAll(".box")].forEach((el) => {
 el.addEventListener("mousemove", (e) => {
  //  console.log(e);
  //  el.classList.add("red");
  el.style["background-color"] = color;
  el.style["border-color"] = color;
  el.firstChild.style["border-bottom-left-radius"] = "5px";
 });
});

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
