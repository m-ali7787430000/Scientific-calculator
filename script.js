// script.js

// Basic operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { if (b === 0) throw new Error('Cannot divide by zero'); return a / b; }

// Scientific functions
function square(a) { return a * a; }
function squareRoot(a) { return Math.sqrt(a); }
function power(base, exponent) { return Math.pow(base, exponent); }
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }

// Memory operations
let memory = 0;
function memoryStore(value) { memory = value; }
function memoryRecall() { return memory; }
function memoryClear() { memory = 0; }

// Display update function
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

// Example usage with basic calculations
let currentInput = 0;
updateDisplay(currentInput);