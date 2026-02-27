"use strict";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay(value) {
    display.textContent = value || "0";
}

function calculate() {
    try{
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
    } catch{
        updateDisplay("Error");
        currentInput = "";
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (btn.classList.contains("clear")) {
            currentInput = "";
            updateDisplay(currentInput);
        }
         else if (btn.classList.contains("equal")) {
            calculate();
        }  else {
            currentInput += value;
            updateDisplay(currentInput)
        }
    });
});

document.addEventListener("keydown" , (event) => {
    const key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)) {
        if(key === ".") {
            const parts = currentInput.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1];
            if (lastPart.includes(".")) return;
        }
        currentInput += key;
        updateDisplay(currentInput);
    }else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    } else if (key.toLowerCase() === "c") {
        currentInput = "";
        updateDisplay(currentInput);
    }
});