const playGuide1 = document.querySelector(".play1");
const pauseGuide1 = document.querySelector(".pause1");
const stopGuide1 = document.querySelector(".stop1");

const playGuide2 = document.querySelector(".play2");
const pauseGuide2 = document.querySelector(".pause2");
const stopGuide2 = document.querySelector(".stop2");

const playGuide3 = document.querySelector(".play3");
const pauseGuide3 = document.querySelector(".pause3");
const stopGuide3 = document.querySelector(".stop3");

const playGuide4 = document.querySelector(".play4");
const pauseGuide4 = document.querySelector(".pause4");
const stopGuide4 = document.querySelector(".stop4");

const audio1 = document.getElementById("guide1");
const audio2 = document.getElementById("guide2");
const audio3 = document.getElementById("guide3");
const audio4 = document.getElementById("guide4");

playGuide1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio1.play();
});
pauseGuide1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio1.pause();
});
stopGuide1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio1.pause();
  audio1.currentTime = 0;
});

playGuide2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio2.play();
});
pauseGuide2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio2.pause();
});
stopGuide2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio2.pause();
  audio2.currentTime = 0;
});
playGuide3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio3.play();
});
pauseGuide3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio3.pause();
});
stopGuide3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio3.pause();
  audio3.currentTime = 0;
});

playGuide4.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio4.play();
});
pauseGuide4.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio4.pause();
});
stopGuide4.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  audio4.pause();
  audio4.currentTime = 0;
});
