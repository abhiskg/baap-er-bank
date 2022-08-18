"use strict";
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputValue;
}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}
function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue.toString();
}
