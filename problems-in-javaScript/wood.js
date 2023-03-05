/**
 * Task: write a program to calculate how many wood required to make based on (user quantity) Table, Bed, Chair.
 *
 * perTableWood = 20;
 * perBedWood = 33;
 * perChairWood = 56;
 */

// Function for calculation
function calculateWood(tableQuantity, bedQuantity, chairQuantity) {
  // Define per wood require
  const perTableWood = 20;
  const perBedWood = 33;
  const perChairWood = 56;

  // Calculation with quantity
  const tableWood = tableQuantity * perTableWood;
  const badWood = bedQuantity * perBedWood;
  const chairWood = chairQuantity * perChairWood;

  // Final Calculation
  const totalWood = tableWood + badWood + chairWood;
  return totalWood;
}

const result = calculateWood(10, 3, 2);
console.log(result);
