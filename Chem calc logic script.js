// calc.js
// Simple chemistry reaction handler

// Example: Na + Cl2 -> NaCl
function balanceEquation(reactants, products) {
  // placeholder for a real balancing algorithm
  return `Balanced form of: ${reactants.join(" + ")} → ${products.join(" + ")}`;
}

function getProducts(reactants) {
  // Very basic example rules
  if (reactants.includes("H2") && reactants.includes("O2")) {
    return ["H2O"];
  }
  if (reactants.includes("Na") && reactants.includes("Cl2")) {
    return ["NaCl"];
  }
  return ["Unknown reaction"];
}

// Example usage:
console.log(balanceEquation(["Na", "Cl2"], ["NaCl"]));
console.log(getProducts(["H2", "O2"]));

// Export for browser or Node.js
if (typeof module !== "undefined") {
  module.exports = { balanceEquation, getProducts };
}