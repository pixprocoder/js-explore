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
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber(false);
  });
