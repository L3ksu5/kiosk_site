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
  "btn1",
  "page1",
  "/pdf/Клин рекомендации/1) Клин реком парадонтит.pdf"
);
loadAndDisplayPDF(
  "btn2",
  "page2",
  "/pdf/Клин рекомендации/2) Клин реком периапикальные ткани.pdf"
);
loadAndDisplayPDF(
  "btn3",
  "page3",
  "/pdf/Клин рекомендации/3) клин реком пульпа.pdf"
);
loadAndDisplayPDF(
  "btn4",
  "page4",
  "/pdf/Клин рекомендации/4) Клин реком гингивит.pdf"
);
loadAndDisplayPDF(
  "btn5",
  "page5",
  "/pdf/Клин рекомендации/5) Клин реком кариес.pdf"
);
loadAndDisplayPDF(
  "btn6",
  "page6",
  "/pdf/Клин рекомендации/6) Клин реком язвеный гингивит.pdf"
);
loadAndDisplayPDF(
  "btn7",
  "page7",
  "/pdf/Клин рекомендации/7) Клин реком полное отсутствие зубов.pdf"
);
loadAndDisplayPDF(
  "btn8",
  "page8",
  "/pdf/Клин рекомендации/8) Клин реком частичное отсутствие зубов.pdf"
);
loadAndDisplayPDF(
  "btn9",
  "page9",
  "/pdf/Клин рекомендации/9) Клин реком эритроплакия.pdf"
);
loadAndDisplayPDF(
  "btn10",
  "page10",
  "/pdf/Клин рекомендации/10) Клин реком лейкоплакия.pdf"
);
loadAndDisplayPDF(
  "btn11",
  "page11",
  "/pdf/Клин рекомендации/11) Клин реком лейкедема.pdf"
);
loadAndDisplayPDF(
  "btn12",
  "page12",
  "/pdf/Клин рекомендации/12) Клин реком перелом нижней челюсти.pdf"
);
loadAndDisplayPDF(
  "btn13",
  "page13",
  "/pdf/Клин рекомендации/13) Клин реком перикоронит.pdf"
);
loadAndDisplayPDF(
  "btn14",
  "page14",
  "/pdf/Клин рекомендации/14) Клин реком периостит.pdf"
);
loadAndDisplayPDF(
  "btn15",
  "page15",
  "/pdf/Клин рекомендации/15) Клин реком альвеолит.pdf"
);
