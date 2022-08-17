// Submit button Handler
const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement;
submitBtn.addEventListener("click", () => {
  const email = document.querySelector("#email") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;
  if (email.value === "abhi@gmail.com" && password.value === "123456") {
    location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
