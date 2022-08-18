"use strict";
document.getElementById("withdraw-btn").addEventListener("click", () => {
    const newWithdrawAmount = getInputValueById("withdraw-field");
    if (isNaN(newWithdrawAmount)) {
        alert("please provide a valid no");
        return;
    }
    const previousBalance = getElementValueById("balance");
    if (newWithdrawAmount > previousBalance) {
        alert("Insufficient Balance");
        return;
    }
    const previousWithdraw = getElementValueById("withdraw");
    const withdrawTotal = previousWithdraw + newWithdrawAmount;
    setElementValueById("withdraw", withdrawTotal);
    const newBalance = previousBalance - newWithdrawAmount;
    setElementValueById("balance", newBalance);
});
