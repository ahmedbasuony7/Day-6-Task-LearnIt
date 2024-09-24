


console.log('frfe');


// Reference to the input field where the result is displayed
let result = document.getElementById('result');

// Append characters to the input field
function appendCharacter(char) {
    result.value += char;
}

// Clear the input field
function clearScreen() {
    result.value = '';
}

// Delete the last character in the input field
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Calculate the result using eval (for simplicity)
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

// Round the current value in the input field
function roundValue() {
    let currentValue = parseFloat(result.value);
    if (!isNaN(currentValue)) {
        result.value = Math.round(currentValue);
    } else {
        result.value = 'Error';
    }
}

// Generate a random number between 0 and 100 and display it
function randomNumber() {
    result.value = Math.random() * 100;
}








