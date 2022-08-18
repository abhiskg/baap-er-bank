"use strict";
document.getElementById("deposit-btn").addEventListener("click", () => {
    const newDepositAmount = getInputValueById("deposit-field");
    const previousDeposit = getElementValueById("deposit");
    const depositTotal = previousDeposit + newDepositAmount;
    setElementValueById("deposit", depositTotal);
    const previousBalance = getElementValueById("balance");
    const newBalance = previousBalance + newDepositAmount;
    setElementValueById("balance", newBalance);
});
