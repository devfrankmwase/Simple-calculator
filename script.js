"use strict";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (btn.classList.contains("clear")) {
            currentInput = "";
            display.textContent = "0";
        }
         else if (btn.classList.contains("equal")) {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            }
             catch {
                display.textContent = "Error";
                currentInput = "";
            }
        }  else {
            currentInput += value;
            display.textContent = currentInput;
        }
    }
    )
})