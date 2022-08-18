"use strict";
const balance = document.querySelector("#balance");
const depositBtn = document.querySelector("#deposit-btn");
depositBtn.addEventListener("click", () => {
    const depositField = document.querySelector("#deposit-field");
    const deposit = document.querySelector("#deposit");
    if (isNaN(parseFloat(depositField.value))) {
        alert("please provide a valid no");
        depositField.value = "";
        return;
    }
    const depositAmount = parseFloat(deposit.textContent);
    const newDepositAmount = depositAmount + parseFloat(depositField.value);
    deposit.textContent = newDepositAmount.toString();
    const balanceAmount = parseFloat(balance.textContent);
    const newBalanceAmount = balanceAmount + parseFloat(depositField.value);
    balance.textContent = newBalanceAmount.toString();
    depositField.value = "";
});
const withdrawBtn = document.querySelector("#withdraw-btn");
withdrawBtn.addEventListener("click", () => {
    const withdraw = document.querySelector("#withdraw");
    const withdrawField = document.querySelector("#withdraw-field");
    if (isNaN(parseFloat(withdrawField.value))) {
        alert("please provide a valid no");
        withdrawField.value = "";
        return;
    }
    if (withdrawField.value > balance.textContent) {
        alert("Insufficient Balance");
        withdrawField.value = "";
        return;
    }
    const withdrawAmount = parseFloat(withdraw.textContent);
    const newWithdrawAmount = withdrawAmount + parseFloat(withdrawField.value);
    withdraw.textContent = newWithdrawAmount.toString();
    const balanceAmount = parseFloat(balance.textContent);
    const newBalanceAmount = balanceAmount - parseFloat(withdrawField.value);
    balance.textContent = newBalanceAmount.toString();
    withdrawField.value = "";
});
