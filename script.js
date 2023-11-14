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

const button1 = document.getElementById("about-button");
const button2 = document.getElementById("map-button");
const button3 = document.getElementById("show-pdf");
const button4 = document.getElementById("schedule");
const button5 = document.getElementById("contact");
const button6 = document.getElementById("founder");
const button7 = document.getElementById("usrle");

const content1 = document.getElementById("about");
const content2 = document.getElementById("map");
const content3 = document.getElementById("show-pdf-pages");
const content4 = document.getElementById("schedule-tab");
const content5 = document.getElementById("contact-tab");
const content6 = document.getElementById("founder-info");
const content7 = document.getElementById("usrle-pages");
const content8 = document.getElementById("bus");

button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "block";
});

button2.addEventListener("click", () => {
  hideAllContent();
  content8.style.display = "block";
  content2.style.display = "block";
});

button3.addEventListener("click", () => {
  hideAllContent();
  content3.style.display = "flex";
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
  content7.style.display = "flex";
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
    "map",
    {
      center: [50.598061, 36.595613],
      zoom: 13,
      controls: [],
    },
    {
      restrictMapArea: [
        [50.68479, 36.36417],
        [50.515009, 36.843792],
      ],
      suppressMapOpenBlock: true,
      yandexMapDisablePoiInteractivity: true,
    }
  );

  var placemark1 = new ymaps.Placemark([50.598061, 36.595613], {
    balloonContentBody:
      "<h3>Стоматологическая поликлиника № 1</h3><br>" +
      "<p>+7 (4722) 25-71-57</p><br/>" +
      "<b>Преображенская 56</b> <br/>",
    hintContent: "Стоматологическая поликлиника № 1",
  });

  var placemark2 = new ymaps.Placemark([50.634097, 36.563887], {
    balloonContentBody:
      "<h3>ОГАУЗ Стоматологическая поликлиника № 1, филиал стоматологического отделения № 1</h3><br>" +
      "<p>+7 (4722) 35-76-03</p><br/>" +
      "<b>Привольная 18</b> <br/>",
    hintContent: "филиал стоматологического отделения № 1",
  });

  // Добавление метки на карту.
  myMap.geoObjects.add(placemark1);
  myMap.geoObjects.add(placemark2);

  var mySearchControl = new ymaps.control.SearchControl({
    options: {
      noPlacemark: true,
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("show-pdf").addEventListener("click", function () {
    var pdfUrl = "/pdf/ИНН.pdf"; // Путь к вашему PDF-файлу
    var pdfContainer = document.getElementById("show-pdf-pages");

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
  document.getElementById("usrle").addEventListener("click", function () {
    var pdfUrl = "/pdf/выписка ЕГРЮЛ.pdf"; // Путь к вашему PDF-файлу
    var pdfContainer = document.getElementById("usrle-pages");

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
