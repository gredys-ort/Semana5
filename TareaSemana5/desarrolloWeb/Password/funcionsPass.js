// script.js
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const resultMessage = document.getElementById("result");

loginForm.addEventListener("submit", validatePassword);

function validatePassword(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "usuario" && password === "contraseña") {
        setResultMessage("Contraseña válida. ¡Bienvenido!", "green");
    } else {
        setResultMessage("Contraseña incorrecta. Por favor, inténtalo de nuevo.", "red");
    }
}

function setResultMessage(message, color) {
    resultMessage.textContent = message;
    resultMessage.style.color = color;
}
