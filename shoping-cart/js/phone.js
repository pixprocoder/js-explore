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
