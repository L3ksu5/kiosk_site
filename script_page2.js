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
  window.location.href = "index.html";
});

const button1 = document.getElementById("pdf");
const button2 = document.getElementById("contact-reg-btn");
const button3 = document.getElementById("pdf2");
const button4 = document.getElementById("btn5");
/* const button4 = document.getElementById("pdf");
const button5 = document.getElementById("pdf"); */

const content1 = document.getElementById("show-pdfs");
const content2 = document.getElementById("contact-reg");
const content3 = document.getElementById("show-pdfs-2");
const content4 = document.getElementById("tab-1");
/*const content4 = document.getElementById("show-pdfs");
const content5 = document.getElementById("show-pdfs"); */

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "flex";
});

button2.addEventListener("click", () => {
  hideAllContent();
  content2.style.display = "flex";
});

button3.addEventListener("click", () => {
  hideAllContent();
  content3.style.display = "flex";
});

button4.addEventListener("click", () => {
  hideAllContent();
  content4.style.display = "block";
});

/* button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "flex";
});

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "flex"; 
});*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pdf").addEventListener("click", function () {
    var pdfUrl = "/pdf/Внутр распоряд для потребителей услуг.pdf"; // Путь к вашему PDF-файлу
    var pdfContainer = document.getElementById("show-pdfs");

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
  document.getElementById("pdf2").addEventListener("click", function () {
    var pdfUrl =
      "/pdf/Правила внутреннего  распорядrка  для потребителей услуг 30.08.2023.pdf"; // Путь к вашему PDF-файлу
    var pdfContainer = document.getElementById("show-pdfs-2");

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
fetch("/.vscode/settings.json")
  .then((response) => response.json())
  .then((data) => {
    // Обрабатываем полученные данные
    console.log(data);
  })
  .catch((error) => {
    // Обрабатываем ошибку, если она возникла
    console.error("Произошла ошибка: " + error);
  });
