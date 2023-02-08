var app = document.getElementById("app");

window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.1;
  audio.play();
});

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Give")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Love")
  .pauseFor(2500)
  .deleteChars(7)
  .typeString("Live!")
  .pauseFor(2500)
  .start();
