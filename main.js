document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const button = document.getElementById("button");
  const emailInput = document.getElementById("email");
  const errorLabel = document.getElementById("errorLabel");

  if (button && emailInput && errorLabel) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const email = emailInput.value.trim();

      if (validateEmail(email)) {
        localStorage.setItem("userEmail", email); //salvo o email no localStorage
        window.location.href = "Congratulations.html"; // Redireciona para a página de sucesso
      } else {
        errorLabel.classList.remove("display-none"); // removo o css display:none fazendo o error aparecer
        emailInput.classList.add("email-Input-Error"); // mudo o aspecto do input do email
      }
    });
  }
  //Função simples de validação de email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
