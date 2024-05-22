const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navLinks = document.getElementById("navLinks");
const closer1 = document.getElementById("closer1");
const closer2 = document.getElementById("closer2");
const closer3 = document.getElementById("closer3");

if (bar) {
  bar.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

if (closer1) {
  closer1.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

if (closer2) {
  closer2.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

if (closer3) {
  closer3.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}
