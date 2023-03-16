function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const character = e.target.innerText;
  const typedField = document.getElementById("typed-field");
  const previousTypedChar = typedField.value;
  if (isNaN(character)) {
    if (character === "C") {
      typedField.value = "";
    } else if (character === "<") {
      const digits = previousTypedChar.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedField.value = remainingDigits;
    }
  } else {
    const newTypedChar = previousTypedChar + character;
    typedField.value = newTypedChar;
  }
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedPinField = document.getElementById("typed-field");
  const typedPin = typedPinField.value;

  if (currentPin === "") {
    alert("please generate pin first");
    typedPinField.value = "";
  } else {
    const inCorrectMessage = document.getElementById("pin-incorrect");
    const successMessage = document.getElementById("pin-success");
    if (typedPin === currentPin) {
      successMessage.style.display = "block";
      inCorrectMessage.style.display = "none";
      typedPinField.value = "";
    } else {
      inCorrectMessage.style.display = "block";
      successMessage.style.display = "none";
      typedPinField.value = "";
    }
  }
});
