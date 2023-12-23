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

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "page_platnoe.html";
});

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");

const content1 = document.getElementById("cnt1");
const content2 = document.getElementById("page1");
const content3 = document.getElementById("cnt3");
const content4 = document.getElementById("cnt4");
const content5 = document.getElementById("cnt5");
const content6 = document.getElementById("page2");

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "block";
});

button2.addEventListener("click", () => {
  hideAllContent();
  content2.style.display = "flex";
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
  content6.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  button2.addEventListener("click", function () {
    var pdfUrl = "/pdf/2 ПОЛОЖЕНИЕо платных услугах.pdf";
    var pdfContainer = content2;

    // Очищаем контейнер
    while (pdfContainer.firstChild) {
      pdfContainer.removeChild(pdfContainer.firstChild);
    }

    // Загружаем PDF-файл
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
      for (var pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        pdf.getPage(pageNumber).then(function (page) {
          var viewport = page.getViewport({ scale: 1.7 });
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          page.render({ canvasContext: context, viewport: viewport });

          // Добавляем страницу в контейнер
          pdfContainer.appendChild(canvas);
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  button6.addEventListener("click", function () {
    var pdfUrl = "/pdf/7 Договор 2023.pdf";
    var pdfContainer = content6;

    // Очищаем контейнер
    while (pdfContainer.firstChild) {
      pdfContainer.removeChild(pdfContainer.firstChild);
    }

    // Загружаем PDF-файл
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
      for (var pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        pdf.getPage(pageNumber).then(function (page) {
          var viewport = page.getViewport({ scale: 1.7 });
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          page.render({ canvasContext: context, viewport: viewport });

          // Добавляем страницу в контейнер
          pdfContainer.appendChild(canvas);
        });
      }
    });
  });
});
