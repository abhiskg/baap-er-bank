"use strict";
// Submit button Handler
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    if (email.value === "abhi@gmail.com" && password.value === "123456") {
        location.href = "bank.html";
    }
    else {
        alert("Invalid User");
    }
});
