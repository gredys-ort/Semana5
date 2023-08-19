// script.js
const arrayForm = document.getElementById("array-form");
const actionSelect = document.getElementById("action");
const inputFields = document.getElementById("input-fields");
const resultMessage = document.getElementById("result");

arrayForm.addEventListener("submit", performAction);

function performAction(event) {
    event.preventDefault();

    const action = actionSelect.value;

    if (action === "print") {
        const items = getInputItems();
        printArray(items);
    } else if (action === "sum" || action === "multiply") {
        const numbers = getInputNumbers();
        const result = action === "sum" ? sumArray(numbers) : multiplyArray(numbers);
        setResultMessage(`Resultado: ${result}`);
    } else if (action === "sumRange") {
        const numbers = getInputNumbers();
        const start = parseInt(prompt("Ingrese la posición inicial:"));
        const end = parseInt(prompt("Ingrese la posición final:"));
        if (!isNaN(start) && !isNaN(end)) {
            const result = sumArrayInRange(numbers, start, end);
            setResultMessage(`Resultado del rango ${start} al ${end}: ${result}`);
        } else {
            setResultMessage("Entrada inválida. Por favor, ingrese números válidos.");
        }
    }
}

function getInputItems() {
    const input = prompt("Ingrese los ítems del arreglo separados por comas:");
    return input.split(",").map(item => item.trim());
}

function printArray(items) {
    resultMessage.innerHTML = ""; // Clear previous result
    const ul = document.createElement("ul");
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    resultMessage.appendChild(ul);
}

function getInputNumbers() {
    const input = prompt("Ingrese los números del arreglo separados por comas:");
    return input.split(",").map(Number);
}

function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

function multiplyArray(numbers) {
    return numbers.reduce((product, number) => product * number, 1);
}

function sumArrayInRange(numbers, start, end) {
    return numbers.slice(start, end + 1).reduce((sum, number) => sum + number, 0);
}

function setResultMessage(message) {
    resultMessage.textContent = message;
}
