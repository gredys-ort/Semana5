// script.js
const taxForm = document.getElementById("tax-form");
const ageInput = document.getElementById("age");
const incomeInput = document.getElementById("income");
const resultMessage = document.getElementById("result");

taxForm.addEventListener("submit", calculateTaxes);

function calculateTaxes(event) {
    event.preventDefault();

    const age = parseInt(ageInput.value);
    const income = parseFloat(incomeInput.value);

    let taxAmount = calcularImpuestos(age, income);

    if (taxAmount > 0) {
        setResultMessage(`Impuestos a pagar: Q.${taxAmount.toFixed(2)}`, "green");
    } else {
        setResultMessage("No debes pagar impuestos.", "blue");
    }
}

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

function setResultMessage(message, color) {
    resultMessage.textContent = message;
    resultMessage.style.color = color;
}
