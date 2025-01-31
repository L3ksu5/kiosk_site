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
    const closePopupButton = document.getElementById("closePopup8");
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
    const closePopupButton = document.getElementById("closePopup9");
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
    const closePopupButton = document.getElementById("closePopup10");
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
    const closePopupButton = document.getElementById("closePopup11");
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
    const closePopupButton = document.getElementById("closePopup12");
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
    const closePopupButton = document.getElementById("closePopup13");
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
    const closePopupButton = document.getElementById("closePopup14");
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
    const closePopupButton = document.getElementById("closePopup15");
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
    const closePopupButton = document.getElementById("closePopup16");
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
    const closePopupButton = document.getElementById("closePopup17");
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
    const closePopupButton = document.getElementById("closePopup18");
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
    const closePopupButton = document.getElementById("closePopup19");
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
    const closePopupButton = document.getElementById("closePopup20");
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
    const closePopupButton = document.getElementById("closePopup21");
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
    const closePopupButton = document.getElementById("closePopup22");
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
    const closePopupButton = document.getElementById("closePopup23");
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
    "/pdf/Прейскурант/Код услуги.pdf"
  );
  loadAndDisplayPDF(
    "pop2",
    "page4",
    "/pdf/Прейскурант/Прейскурант_ортодонтических_услуг_редакция_72_03_2023.pdf"
  );
  loadAndDisplayPDF(
    "pop3",
    "page5",
    "/pdf/Прейскурант/Прейскурант_оториноларингологических_услуг_редакция_01_11_2020_.pdf"
  );
  loadAndDisplayPDF(
    "pop4",
    "page6",
    "/pdf/Прейскурант/Прейскурант_платных_ортопедических_услуг_редакция_01_05_2023.pdf"
  );
  loadAndDisplayPDF(
    "pop5",
    "page7",
    "/pdf/Прейскурант/Прейскурант_платных_услуг_редакция_01_06_2023_.pdf"
  );

  loadAndDisplayPDF(
    "pop6",
    "page8",
    "/pdf/ИДС Платное/ИДС  на проведение профессиональной гигиены полости рта.pdf"
  );
  loadAndDisplayPDF(
    "pop7",
    "page9",
    "/pdf/ИДС Платное/ИДС Ортопедического вмешательства.pdf"
  );
  loadAndDisplayPDF(
    "pop8",
    "page10",
    "/pdf/ИДС Платное/ИДС имплантация.pdf"
  );
  loadAndDisplayPDF(
    "pop9",
    "page11",
    "/pdf/ИДС Платное/ИДС карантин.pdf"
  );
  loadAndDisplayPDF(
    "pop10",
    "page12",
    "/pdf/ИДС Платное/ИДС на консультацию врача-стоматолога.pdf"
  );
  loadAndDisplayPDF(
    "pop11",
    "page13",
    "/pdf/ИДС Платное/ИДС на мед вмешательство.pdf"
  );
  loadAndDisplayPDF(
    "pop12",
    "page14",
    "/pdf/ИДС Платное/ИДС на отбеливание зубов.pdf"
  );
  loadAndDisplayPDF(
    "pop13",
    "page15",
    "/pdf/ИДС Платное/ИДС на пародонтологическое лечение.pdf"
  );
  loadAndDisplayPDF(
    "pop14",
    "page16",
    "/pdf/ИДС Платное/ИДС оперативного вмешательства.pdf"
  );
  loadAndDisplayPDF(
    "pop15",
    "page17",
    "/pdf/ИДС Платное/ИДС ортодонтия несовершенолетние.pdf"
  );
  loadAndDisplayPDF(
    "pop16",
    "page18",
    "/pdf/ИДС Платное/ИДС рентген.pdf"
  );
  loadAndDisplayPDF(
    "pop17",
    "page19",
    "/pdf/ИДС Платное/ИДС терапия.pdf"
  );
  loadAndDisplayPDF(
    "pop18",
    "page20",
    "/pdf/ИДС Платное/ИДС эндодонтия.pdf"
  );
  loadAndDisplayPDF(
    "pop19",
    "page21",
    "/pdf/ИДС Платное/Отказ на мед вмешательство (Поликлинический).pdf"
  );
  loadAndDisplayPDF(
    "pop20",
    "page22",
    "/pdf/ИДС Платное/Отказ от видов медицинских вмешательств (Приложение №3 к приказу Минздрава РФ от 12 ноября 2021 г. №1051н).pdf"
  );
  loadAndDisplayPDF(
    "pop21",
    "page23",
    "/pdf/ИДС Платное/Перс данные.pdf"
  );
  loadAndDisplayPDF(
    "pop22",
    "page24",
    "/pdf/ИДС Платное/Согласие на МСЭ.pdf"
  );
  loadAndDisplayPDF(
    "pop23",
    "page25",
    "/pdf/ИДС Платное/согласие на отступление от стандарта.pdf"
  );