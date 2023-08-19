// script.js
const calculateButton = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDisplay = document.getElementById("result");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
    const weightInPounds = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weightInPounds) || isNaN(height)) {
        resultDisplay.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    // Convertir de libras a kilogramos
    const weightInKg = weightInPounds * 0.453592;

    const bmi = weightInKg / (height * height);

    let resultText = "";
    if (bmi < 18.5) {
        resultText = "Bajo de peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Sobrepeso";
    } else {
        resultText = "Obeso";
    }

    resultDisplay.textContent = `Tu IMC es ${bmi.toFixed(2)} = ${resultText}`;
}
