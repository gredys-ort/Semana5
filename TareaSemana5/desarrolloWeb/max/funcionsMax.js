// script.js
const maxForm = document.getElementById("max-form");
const inputArray = document.getElementById("input-array");
const calculationType = document.getElementById("calculation-type");
const resultMessage = document.getElementById("result");

maxForm.addEventListener("submit", findMax);

function findMax(event) {
    event.preventDefault();

    const input = inputArray.value.trim();
    const array = input.split(",").map(Number);
    const method = calculationType.value;

    let max;

    if (method === "with") {
        max = Math.max(...array);
    } else if (method === "without") {
        max = encontrarMaximoSinMathMax(array);
    }

    setResultMessage(`Máximo: ${max}`, "green");
}

function encontrarMaximoSinMathMax(arreglo) {
    let maximo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }

    return maximo;
}

function setResultMessage(message, color) {
    resultMessage.textContent = message;
    resultMessage.style.color = color;
}
