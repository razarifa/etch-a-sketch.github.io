let container = document.querySelector(".box-container");
let n = Number(prompt("nece?"));
for (let i = 0; i < n; i++) {
 for (let j = 0; j < n; j++) {
  let box = document.createElement("div");
  box.style.height = 960 / n + "px";
  box.style.width = 960 / n + "px";
  box.classList.add("box");
  container.appendChild(box);
 }
}
container.addEventListener("click", () => {
 [...container.querySelectorAll(".box")].forEach((el) => {
  el.addEventListener("mouseover", (e) => {
   console.log(e);
   el.classList.add("red");
  });
 });
});

container.addEventListener("dblclick", () => {
 console.log("hello");
});
