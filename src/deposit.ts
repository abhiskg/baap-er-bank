(document.getElementById("deposit-btn") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    const newDepositAmount = getInputValueById("deposit-field");

    const previousDeposit = getElementValueById("deposit");

    const depositTotal = previousDeposit + newDepositAmount!;

    setElementValueById("deposit", depositTotal);

    const previousBalance = getElementValueById("balance");

    const newBalance = previousBalance + newDepositAmount!;

    setElementValueById("balance", newBalance);
  }
);
