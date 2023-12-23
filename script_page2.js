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

const button2 = document.getElementById("contact-reg-btn");
const button4 = document.getElementById("btn5");

const content2 = document.getElementById("contact-reg");
const content4 = document.getElementById("tab-1");



button2.addEventListener("click", () => {
  hideAllContent();
  content2.style.display = "flex";
});

button4.addEventListener("click", () => {
  hideAllContent();
  content4.style.display = "block";
});

/* fetch("/.vscode/settings.json")
  .then((response) => response.json())
  .then((data) => {
    // Обрабатываем полученные данные
    console.log(data);
  })
  .catch((error) => {
    // Обрабатываем ошибку, если она возникла
    console.error("Произошла ошибка: " + error);
  }); */


  async function hideAllContent() {
    const allContent = document.querySelectorAll(".content");
    allContent.forEach((content) => {
      content.style.display = "none";
    });
  }
  
  async function clearCanvas(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  
  function showLoadingIndicator(container) {
    const loadingIndicator = document.createElement("div");
    loadingIndicator.className = "loading-indicator";
    loadingIndicator.innerHTML = "Loading..."; 
    container.appendChild(loadingIndicator);
  }
  
  function hideLoadingIndicator(container) {
    const loadingIndicator = container.querySelector(".loading-indicator");
    if (loadingIndicator) {
      container.removeChild(loadingIndicator);
    }
  }
  
  async function loadPDF(pdfUrl) {
    try {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      return pdf;
    } catch (error) {
      throw new Error("Error loading PDF: " + error.message);
    }
  }
  
  async function renderPage(pdf, pageNumber, container) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.7 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: context, viewport: viewport });
    container.appendChild(canvas);
  }
  
  // Функция для очистки страниц в контейнере
  async function clearPages(container) {
    await clearCanvas(container);
  }
  
  async function loadAndDisplayPDF(buttonId, contentId, pdfUrl) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    let pdfContainer = content;
    let pdf;
  
    // Установка текущей страницы в 1 перед каждым вызовом
    let currentPage = 1;
  
    button.addEventListener("click", async () => {
      await hideAllContent();
      content.style.display = "flex";
  
      // Очистка страниц в контейнере перед загрузкой новых страниц
      await clearPages(pdfContainer);
  
      // Показать индикатор загрузки
      showLoadingIndicator(pdfContainer);
  
      try {
        if (!pdf) {
          pdf = await loadPDF(pdfUrl);
        }
  
        // Скрыть индикатор загрузки после успешной загрузки PDF
        hideLoadingIndicator(pdfContainer);
  
        // Рендер первой страницы
        await renderPage(pdf, currentPage, pdfContainer);
  
        // Динамическая загрузка и рендеринг остальных страниц при прокрутке внутри контейнера
        pdfContainer.addEventListener("scroll", async () => {
          const containerHeight = pdfContainer.clientHeight;
          const totalHeight = pdfContainer.scrollHeight;
          const currentScroll = pdfContainer.scrollTop + containerHeight;
  
          // Порог для начала загрузки следующей страницы (например, 90% высоты)
          const threshold = 0.9;
  
          if (currentScroll / totalHeight > threshold) {
            const currentPage = pdfContainer.childElementCount + 1;
            if (currentPage <= pdf.numPages) {
              await renderPage(pdf, currentPage, pdfContainer);
            }
          }
        });
      } catch (error) {
        // Обработка ошибок при загрузке PDF
        console.error(error.message);
        hideLoadingIndicator(pdfContainer);
      }
    });
  }
  loadAndDisplayPDF(
    "pdf",
    "show-pdfs",
    "/pdf/Внутр распоряд для потребителей услуг.pdf"
  );
  loadAndDisplayPDF(
    "pdf2",
    "show-pdfs-2",
    "/pdf/Правила внутреннего  распорядrка  для потребителей услуг 30.08.2023.pdf"
  );
  loadAndDisplayPDF(
    "btn2",
    "page2",
    "/pdf/ЗАЩИТА  ПЕРСОНАЛЬНЫХ  ДАННЫХ  ПАЦИЕНТОВ.pdf"
  );

  loadAndDisplayPDF(
    "btn6",
    "page6",
    "/pdf/О правах/Положение о порядке организации и предоставления платных медицинских услуг.pdf"
  );
  loadAndDisplayPDF(
    "btn7",
    "page7",
    "/pdf/О правах новое/Приказ Минздрава России от 31.07.2020 N 786н (ред. от 18.02..pdf"
  );
  loadAndDisplayPDF(
    "btn8",
    "page8",
    "/pdf/О правах новое/Постановление Правительства РФ от 11.05.2023 N 736  Об утвер.pdf"
  );
  loadAndDisplayPDF(
    "btn9",
    "page9",
    "/pdf/О правах новое/Федеральный закон от 21.11.2011 N 323-ФЗ (ред. от 24.07.2023.pdf"
  );
  loadAndDisplayPDF(
    "btn10",
    "page10",
    "/pdf/О правах новое/Закон РФ от 07.02.1992 N 2300-1 (ред. от 04.08.2023)  О защи.pdf"
  );
  loadAndDisplayPDF(
    "btn11",
    "page11",
    "/pdf/О правах новое/Федеральный закон от 29.11.2010 N 326-ФЗ (ред. от 19.12.2022.pdf"
  );
  loadAndDisplayPDF(
    "btn12",
    "page12",
    "/pdf/О правах новое/Федеральный закон от 02.05.2006 N 59-ФЗ (ред. от 04.08.2023).pdf"
  );
