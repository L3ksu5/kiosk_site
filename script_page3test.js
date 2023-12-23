document.addEventListener("copy", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

function hideAllContent() {
  const allContent = document.querySelectorAll(".content");
  allContent.forEach((content) => {
    content.style.display = "none";
  });
}

function onunload() {
    hideAllContent();
    content16.style.display = "block";
}
window.onload = onunload;

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");
const button10 = document.getElementById("btn10");
const button11 = document.getElementById("btn11");
const button12 = document.getElementById("btn12");
const button13 = document.getElementById("btn13");
const button14 = document.getElementById("btn14");
const button15 = document.getElementById("btn15");
const button16 = document.getElementById("btn16");

const content1 = document.getElementById("page1");
const content2 = document.getElementById("page2");
const content3 = document.getElementById("page3");
const content4 = document.getElementById("page4");
const content5 = document.getElementById("page5");
const content6 = document.getElementById("page6");
const content7 = document.getElementById("page7");
const content8 = document.getElementById("page8");
const content9 = document.getElementById("page9");
const content10 = document.getElementById("page10");
const content11 = document.getElementById("page11");
const content12 = document.getElementById("page12");
const content13 = document.getElementById("page13");
const content14 = document.getElementById("page14");
const content15 = document.getElementById("page15");
const content16 = document.getElementById("page16");

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "block";
});

button2.addEventListener("click", () => {
  hideAllContent();
  content2.style.display = "block";
});

button3.addEventListener("click", () => {
  hideAllContent();
  content3.style.display = "block";
});

button4.addEventListener("click", () => {
  hideAllContent();
  content4.style.display = "block";
});

button5.addEventListener("click", () => {
  hideAllContent();
  content5.style.display = "block";
});

button6.addEventListener("click", () => {
  hideAllContent();
  content6.style.display = "block";
});

button7.addEventListener("click", () => {
  hideAllContent();
  content7.style.display = "block";
});

button8.addEventListener("click", () => {
  hideAllContent();
  content8.style.display = "block";
});

button9.addEventListener("click", () => {
  hideAllContent();
  content9.style.display = "block";
});

button10.addEventListener("click", () => {
  hideAllContent();
  content10.style.display = "block";
});

button11.addEventListener("click", () => {
  hideAllContent();
  content11.style.display = "block";
});

button12.addEventListener("click", () => {
  hideAllContent();
  content12.style.display = "block";
});

button13.addEventListener("click", () => {
  hideAllContent();
  content13.style.display = "block";
});

button14.addEventListener("click", () => {
  hideAllContent();
  content14.style.display = "block";
});

button15.addEventListener("click", () => {
  hideAllContent();
  content15.style.display = "block";
});
