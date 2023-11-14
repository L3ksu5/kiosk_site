document.addEventListener("copy", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

const button1 = document.getElementById("tab-btn");
const content1 = document.getElementById("tab-page");
button1.addEventListener("click", () => {
  hideAllContent();
  content1.style.display = "block";
});

function hideAllContent() {
  const allContent = document.querySelectorAll(".content");
  allContent.forEach((content) => {
    content.style.display = "none";
  });
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

async function loadAndDisplayPDF(buttonId, contentId, pdfUrl) {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);
  let pdfContainer = null;
  let pdf;

  button.addEventListener("click", async () => {
    content.style.display = "flex";

    if (pdfContainer === null) {
      pdfContainer = content;

      // Показать индикатор загрузки
      showLoadingIndicator(pdfContainer);

      try {
        pdf = await loadPDF(pdfUrl);

        // Скрыть индикатор загрузки после успешной загрузки PDF
        hideLoadingIndicator(pdfContainer);

        // Рендер первой страницы
        await renderPage(pdf, 1, pdfContainer);

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
    }
  });
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

document.addEventListener("DOMContentLoaded", function () {
  const popupButtons = document.querySelectorAll(".popup-button");

  popupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-popup-target");
      const popup = document.getElementById(targetId);

      if (popup) {
        popup.style.display = "flex";
      }
    });
  });

  for (let i = 1; i <= 3; i++) {
    const closePopupButton = document.getElementById(`closePopup${i}`);
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  }
});

// Пример использования:
loadAndDisplayPDF(
  "pop1",
  "page16",
  "/pdf/Приказы к стандартам/Приказ Минздрава России от 24.12.2012 N 1526н  Об утверждени.pdf"
);
loadAndDisplayPDF(
  "pop2",
  "page17",
  "/pdf/Приказы к стандартам/Приказ Минздрава России от 24.12.2012 N 1490н  Об утверждени.pdf"
);
loadAndDisplayPDF(
  "pop3",
  "page18",
  "/pdf/Приказы к стандартам/Приказ Минздрава России от 03.03.2022 N 133н  Об утверждении.pdf"
);
