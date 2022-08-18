const balance = document.querySelector("#balance") as HTMLSpanElement;

const depositBtn = document.querySelector("#deposit-btn") as HTMLButtonElement;
depositBtn.addEventListener("click", () => {
  const depositField = document.querySelector(
    "#deposit-field"
  ) as HTMLInputElement;
  const deposit = document.querySelector("#deposit") as HTMLSpanElement;

  if (isNaN(parseFloat(depositField.value))) {
    alert("please provide a valid no");
    depositField.value = "";
    return;
  }

  const depositAmount = parseFloat(deposit.textContent!);
  const newDepositAmount = depositAmount + parseFloat(depositField.value);
  deposit.textContent = newDepositAmount.toString();

  const balanceAmount = parseFloat(balance.textContent!);
  const newBalanceAmount = balanceAmount + parseFloat(depositField.value);
  balance.textContent = newBalanceAmount.toString();

  depositField.value = "";
});

const withdrawBtn = document.querySelector(
  "#withdraw-btn"
) as HTMLButtonElement;
withdrawBtn.addEventListener("click", () => {
  const withdraw = document.querySelector("#withdraw") as HTMLSpanElement;
  const withdrawField = document.querySelector(
    "#withdraw-field"
  ) as HTMLInputElement;

  if (isNaN(parseFloat(withdrawField.value))) {
    alert("please provide a valid no");
    withdrawField.value = "";
    return;
  }

  if (withdrawField.value > balance.textContent!) {
    alert("Insufficient Balance");
    withdrawField.value = "";
    return;
  }

  const withdrawAmount = parseFloat(withdraw.textContent!);
  const newWithdrawAmount = withdrawAmount + parseFloat(withdrawField.value);
  withdraw.textContent = newWithdrawAmount.toString();

  const balanceAmount = parseFloat(balance.textContent!);
  const newBalanceAmount = balanceAmount - parseFloat(withdrawField.value);
  balance.textContent = newBalanceAmount.toString();

  withdrawField.value = "";
});
