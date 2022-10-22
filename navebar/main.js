const menu = document.querySelector(".menu");
const parts = document.querySelectorAll(".menu>div");
const links = document.querySelector(".menu-links");
const ankers = document.querySelectorAll(".link");

function toggleMenu({ target: menu }) {
  if (!menu.classList.contains("close-menu")) {
    menu.classList.add("close-menu");
    links.style.display = "flex";
    links.style.opacity = 1;
  } else {
    menu.classList.remove("close-menu");
    links.style.opacity = 0;
    setTimeout(() => {
      links.style.display = "none";
    }, 500);
  }
}
menu.addEventListener("click", (e) => toggleMenu(e));
parts.forEach((el) => {
  el.addEventListener("click", (e) => toggleMenu(e));
});
ankers.forEach((e) =>
  e.addEventListener("mouseover", () => {
    if (!links.classList.contains("moveAnimation")) {
      links.classList.add("moveAnimation");
    }
  })
);
ankers.forEach((e) =>
  e.addEventListener("mouseleave", () => {
    links.classList.remove("moveAnimation");
  })
);