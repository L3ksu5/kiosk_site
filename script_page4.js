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

