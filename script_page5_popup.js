function hideAllContent() {
    const allContent = document.querySelectorAll(".content");
    allContent.forEach((content) => {
      content.style.display = "none";
    });
  }
  
  function loadAndDisplayPDF(buttonId, contentId, pdfUrl) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    let pdfContainer = null;
  
    button.addEventListener("click", () => {
      content.style.display = "flex";
  
      if (pdfContainer === null) {
        pdfContainer = content;
  
        pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
          for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            pdf.getPage(pageNumber).then(function (page) {
              const viewport = page.getViewport({ scale: 1.7 });
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              page.render({ canvasContext: context, viewport: viewport });
              pdfContainer.appendChild(canvas);
            });
          }
        });
      }
    });
  }
  
  // Функция для обработки попапов
  function initializePopup(popupId, closePopupButtonId) {
    const popup = document.getElementById(popupId);
    const closePopupButton = document.getElementById(closePopupButtonId);
  
    if (popup && closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
      });
    }
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
    const closePopupButton = document.getElementById("closePopup1");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup2");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup3");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup4");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup5");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup6");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

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
    const closePopupButton = document.getElementById("closePopup7");
    if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
        closePopupButton.closest(".popup").style.display = "none";
      });
    }
  });

  // Загрузка и отображение PDF-файлов
  loadAndDisplayPDF(
    "pop1",
    "page3",
    "/pdf/ИДС ОМС/ИДС   на эндодонт.  лечение.pdf"
  );
  loadAndDisplayPDF(
    "pop2",
    "page4",
    "/pdf/ИДС ОМС/ИДС на лечение кариеса.pdf"
  );
  loadAndDisplayPDF(
    "pop3",
    "page5",
    "/pdf/ИДС ОМС/ИДС на медвмешательсво.pdf"
  );
  loadAndDisplayPDF(
    "pop4",
    "page6",
    "/pdf/ИДС ОМС/ИДС на оператиное вмешательсво.pdf"
  );
  loadAndDisplayPDF(
    "pop5",
    "page7",
    "/pdf/ИДС ОМС/Информированное добровол. согласие  на проведение профессион. гигиены полости рта 1 и 2 сторона (1).pdf"
  );
  loadAndDisplayPDF(
    "pop6",
    "page8",
    "/pdf/ИДС ОМС//Информированное добровол. согласие  на проведение профессион. гигиены полости рта 1 и 2 сторона (2).pdf"
  );
  loadAndDisplayPDF(
    "pop7",
    "page9",
    "/pdf/ИДС ОМС/Отказ от медицинского вмешательства 22 .pdf"
  );
  