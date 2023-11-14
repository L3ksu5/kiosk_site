fetch('/.vscode/settings.json')
  .then(response => response.json())
  .then(data => {
    // Обрабатываем полученные данные
    console.log(data);
  })
  .catch(error => {
    // Обрабатываем ошибку, если она возникла
    console.error('Произошла ошибка: ' + error);
  });

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

// Кнопка "Назад"
document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

const content1 = document.getElementById("page1");
const content2 = document.getElementById("page2");

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "flex";
});

button2.addEventListener("click", () => {
  hideAllContent();
  content2.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  button1.addEventListener("click", function () {
    var pdfUrl =
      "/pdf/Сводная ведомость результатов проведения СОУТ 2021 (2).pdf"; // Путь к вашему PDF-файлу
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
    var pdfUrl =
      "/pdf/ЗАЩИТА  ПЕРСОНАЛЬНЫХ  ДАННЫХ  ПАЦИЕНТОВ.pdf"; // Путь к вашему PDF-файлу
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
