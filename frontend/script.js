var app = document.getElementById("app");
const menu = document.getElementById("menu_btn");
const close = document.getElementById("close");
const overlay = document.getElementById("menu_overlay");
const music_player = document.getElementById("player");
const song = document.getElementById("song");

window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.1;
  audio.play();
});


  menu.addEventListener("click", () => {
    overlay.classList.toggle("menu_open")
  })
close.addEventListener("click", () => {
    overlay.classList.toggle("menu_open")
})
music_player.addEventListener("mouseover", () => {
  song.classList.add("show")
  })
  music_player.addEventListener("mouseout", () => {
  song.classList.remove("show")
  })
