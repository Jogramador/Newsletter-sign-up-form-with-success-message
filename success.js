document.addEventListener("DOMContentLoaded", function () {
  const emailStored = localStorage.getItem("userEmail");
  const dismissButton = document.querySelector(".button-Input");

  const strongElement = document.querySelector("strong");

  if (strongElement && emailStored) {
    strongElement.textContent = emailStored;
  }

  if (dismissButton) {
    dismissButton.addEventListener("click", function () {
      localStorage.removeItem("userEmail");
      window.location.href = "index.html";
    });
  }
});
