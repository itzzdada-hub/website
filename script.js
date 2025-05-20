const roundLinks = document.querySelectorAll(".roundLinks img");

roundLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("roundLinksHover");
    link.style.border = "solid 4px rgb(36, 36, 36)";
  });
});

roundLinks.forEach((link) => {
  link.addEventListener("mouseout", () => {
    link.classList.remove("roundLinksHover");
    link.style.border = "solid 4px rgb(0, 0, 0)";
  });
});

const instagram = document.querySelector("#instagram");
const youtube = document.querySelector("#youtube");
const discord = document.querySelector("#discord");

instagram.addEventListener("click", () => {
  open("https://www.instagram.com/itzzdada_prod/");
});

youtube.addEventListener("click", () => {
  open("https://www.youtube.com/@itzzdada");
});

discord.addEventListener("click", () => {
  open("https://discord.gg/ZfXdn2R5");
});

const moreLinks = document.querySelectorAll(".discordServer, .fiverr");

moreLinks.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.classList.add("moreLinksHover");
  });
});

moreLinks.forEach((button) => {
  button.addEventListener("mouseout", () => {
    button.classList.remove("moreLinksHover");
  });
});

const discordServer = document.querySelector(".discordServer");
const fiverr = document.querySelector(".fiverr");

discordServer.addEventListener("click", () => {
  open("https://discord.gg/g4JhygxKKQ");
});

fiverr.addEventListener("click", () => {
  open("https://fr.fiverr.com/s/7Yor3PW");
});

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
