document.addEventListener("copy", function (e) {
    e.preventDefault();
  });
  
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  
  document.getElementById("back-button").addEventListener("click", function () {
    window.location.href = "index.html";
  });