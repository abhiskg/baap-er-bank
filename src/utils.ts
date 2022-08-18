function getInputValueById(inputId: string) {
  const inputField = document.getElementById(inputId) as HTMLInputElement;
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";

  if (isNaN(inputValue)) {
    alert("please provide a valid no");
    return;
  }
  return inputValue;
}

function getElementValueById(elementId: string) {
  const element = document.getElementById(elementId) as HTMLSpanElement;
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setElementValueById(elementId: string, newValue: number) {
  const element = document.getElementById(elementId) as HTMLSpanElement;
  element.innerText = newValue.toString();
}
