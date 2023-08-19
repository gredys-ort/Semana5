// script.js
const characterForm = document.getElementById("character-form");
const inputString = document.getElementById("input-string");
const inputCharacter = document.getElementById("input-character");
const resultMessage = document.getElementById("result");

characterForm.addEventListener("submit", countCharacters);

function countCharacters(event) {
    event.preventDefault();

    const text = inputString.value;
    const character = inputCharacter.value;

    const count = numeroDeCaracteres(text, character);

    setResultMessage(`El carácter "${character}" aparece ${count} veces en el texto.`, "green");
}

function numeroDeCaracteres(texto, caracter) {
    const regex = new RegExp(caracter, "gi"); // "i" para insensible a mayúsculas/minúsculas
    const matches = texto.match(regex);

    return matches ? matches.length : 0;
}

function setResultMessage(message, color) {
    resultMessage.textContent = message;
    resultMessage.style.color = color;
}
