function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-input-field");
  const previousCaseNumber = parseInt(caseNumberField.value);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateTotalCasePrice(newCaseNumber) {
  const totalCasePrice = newCaseNumber * 59;
  const totalCasePriceElement = document.getElementById("case-total-price");
  totalCasePriceElement.innerText = totalCasePrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateTotalCasePrice(newCaseNumber);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber);
  });
