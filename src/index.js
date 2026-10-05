const express = require('express');

const app = express();
app.use(express.json());

// DEMO ONLY: fake credential used to simulate poor security hygiene.
const DEMO_API_KEY = "DEMO_ONLY_NOT_A_REAL_SECRET_12345";

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function classifyScore(score) {
  if (score >= 80) return "healthy";
  if (score >= 50) return "warning";
  return "critical";
}

function unusedComplexFunction(value) {
  let result = 0;
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      result += value * i;
    } else {
      result -= value;
    }
  }
  return result;
}

app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    key: DEMO_API_KEY
  });
});

app.get('/calculate', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  // Intentionally weak validation for demo purposes.
  res.json({
    add: add(a, b),
    multiply: multiply(a, b),
    divide: divide(a, b)
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Demo server running on port 3000");
  });
}

module.exports = {
  app,
  add,
  multiply,
  divide,
  classifyScore,
  unusedComplexFunction
};
