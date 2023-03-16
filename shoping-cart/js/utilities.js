function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
  return currentPhoneTotal;
}

function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById("phone-total-price");
  const currentCaseTotal = getTextElementValueById("case-total-price");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;

  const subTotalElement = document.getElementById(
    "sub-total",
    currentCaseTotal
  );
  subTotalElement.innerText = currentSubTotal;

  //   calculate text
  const textAmountElement = (currentSubTotal * 0.1).toFixed(2);
  const textAmount = parseFloat(textAmountElement);
  setTextElementById("text-amount", textAmount);

  // calculate final total
  const finalAmount = currentSubTotal + textAmount;
  setTextElementById("final-total", finalAmount);
}
