// app.js
// Node.js server (Express) for chemistry calculator

const express = require("express");
const bodyParser = require("body-parser");
const { balanceEquation, getProducts } = require("./calc");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint to balance equations
app.post("/balance", (req, res) => {
  const { reactants, products } = req.body;
  const result = balanceEquation(reactants, products);
  res.json({ result });
});

// Endpoint to get products
app.post("/products", (req, res) => {
  const { reactants } = req.body;
  const result = getProducts(reactants);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Chemistry Calc API running at http://localhost:${PORT}`);
});