const deposit = document.querySelector("#deposit") as HTMLSpanElement;
const withdraw = document.querySelector("#withdraw") as HTMLSpanElement;
const balance = document.querySelector("#balance") as HTMLSpanElement;

const preBalance = "1240";

balance.textContent = preBalance;

const depositBtn = document.querySelector("#deposit-btn") as HTMLButtonElement;
depositBtn.addEventListener("click", () => {
  const depositField = document.querySelector(
    "#deposit-field"
  ) as HTMLInputElement;
  deposit.textContent = depositField.value;
});

const withdrawBtn = document.querySelector(
  "#withdraw-btn"
) as HTMLButtonElement;
withdrawBtn.addEventListener("click", () => {
  const withdrawField = document.querySelector(
    "#withdraw-field"
  ) as HTMLInputElement;
  withdraw.textContent = withdrawField.value;
});
