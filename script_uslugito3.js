document.addEventListener("copy", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "terapevticheskoe_otdelenie.html";
});

function hideAllContent() {
  const allContent = document.querySelectorAll(".content");
  allContent.forEach((content) => {
    content.style.display = "none";
  });
}

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");

const content1 = document.getElementById("page1");
const content2 = document.getElementById("page2");
const content3 = document.getElementById("page3");
const content4 = document.getElementById("page4");
const content5 = document.getElementById("page5");

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
  content4.style.display = "flex";
});

button5.addEventListener("click", () => {
  hideAllContent();
  content5.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
    button1.addEventListener("click", function () {
      var pdfUrl = "/pdf/ТО3/КАРИЕС ЗУБОВ.pdf"; // Путь к вашему PDF-файлу
      var pdfContainer = content1;
  
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
    button2.addEventListener("click", function () {
      var pdfUrl = "/pdf/ТО3/Пульпит..pdf"; // Путь к вашему PDF-файлу
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
    button3.addEventListener("click", function () {
      var pdfUrl = "/pdf/ТО3/Апикальный периодонтит.pdf"; // Путь к вашему PDF-файлу
      var pdfContainer = content3;
  
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
    button4.addEventListener("click", function () {
      var pdfUrl = "/pdf/ТО3/ПАМЯТКА ДЛЯ ПАЦИЕНТА ПОСЛЕ ЛЕЧЕНИЯ ЗУБА.pdf"; // Путь к вашему PDF-файлу
      var pdfContainer = content4;
  
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
    button5.addEventListener("click", function () {
      var pdfUrl = "/pdf/ТО3/ПАМЯТКА ДЛЯ ПАЦИЕНТА ПОСЛЕ ЭНДОДОНТИЧЕСКОГО ЛЕЧЕНИЯ.pdf"; // Путь к вашему PDF-файлу
      var pdfContainer = content5;
  
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