document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseNumberField = document.getElementById("case-input-field");
  const previousCaseNumber = parseInt(caseNumberField.value);
  const newCaseNumber = previousCaseNumber + 1;
  caseNumberField.value = newCaseNumber;
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-input-field");
    const previousCaseNumber = parseInt(caseNumberField.value);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
  });
