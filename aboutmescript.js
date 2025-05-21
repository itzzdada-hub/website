const sideBar = document.querySelector(".sideMenu");
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("mouseenter", () => {
  menuButton.classList.add("menuButtonHover");
});

menuButton.addEventListener("mouseout", () => {
  menuButton.classList.remove("menuButtonHover");
});

menuButton.addEventListener("click", () => {
  if (sideBar.style.left === "0px") {
    // Barre ouverte -> on ferme
    sideBar.style.left = "-80px"; // Décale hors de l'écran (ajuste selon ta largeur)
    menuButton.style.left = "10px";
    menuButton.style.transform = "rotate(0deg)";
  } else {
    // Barre fermée -> on ouvre
    sideBar.style.left = "0";
    menuButton.style.left = "80px";
    menuButton.style.transform = "rotate(180deg)";
  }
});

const pFinal = document.querySelector("#pFinal");
const pSecond = document.querySelector("#pSecond");
const pFirst = document.querySelector("#pFirst");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    pFirst.id = "highOpacity";
    pFirst.style.transition = 1 + "s";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    pSecond.id = "highOpacity";
    pSecond.style.transition = 1 + "s";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    pFinal.id = "highOpacity";
    pFinal.style.transition = 1 + "s";
  }
});
