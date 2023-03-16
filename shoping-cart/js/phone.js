function updatePhoneQuantity(isIncrease) {
  const phoneNumberField = document.getElementById("phone-input-field");
  const previousPhoneQuantity = parseInt(phoneNumberField.value);
  let newPhoneQuantity;
  if (isIncrease === true) {
    newPhoneQuantity = previousPhoneQuantity + 1;
  } else {
    newPhoneQuantity = previousPhoneQuantity - 1;
  }
  phoneNumberField.value = newPhoneQuantity;

  return newPhoneQuantity;
}

function updateTotalPhonePrice(newPhoneQuantity) {
  const totalPhonePrice = newPhoneQuantity * 1219;
  const totalPhonePriceElement = document.getElementById("phone-total-price");
  totalPhonePriceElement.innerText = totalPhonePrice;
}

function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
  return currentPhoneTotal;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById("phone-total-price");
  const currentCaseTotal = getTextElementValueById("case-total-price");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  const subTotalElement = document.getElementById("sub-total");
  subTotalElement.innerText = currentSubTotal;
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneQuantity = updatePhoneQuantity(true);
    updateTotalPhonePrice(newPhoneQuantity);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneQuantity = updatePhoneQuantity(false);
    updateTotalPhonePrice(newPhoneQuantity);
    calculateSubTotal();
  });
