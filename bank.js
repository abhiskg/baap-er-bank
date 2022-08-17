"use strict";
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");
const balance = document.querySelector("#balance");
const preBalance = "1240";
balance.textContent = preBalance;
const depositBtn = document.querySelector("#deposit-btn");
depositBtn.addEventListener("click", () => {
    const depositField = document.querySelector("#deposit-field");
    deposit.textContent = depositField.value;
});
const withdrawBtn = document.querySelector("#withdraw-btn");
withdrawBtn.addEventListener("click", () => {
    const withdrawField = document.querySelector("#withdraw-field");
    withdraw.textContent = withdrawField.value;
});
