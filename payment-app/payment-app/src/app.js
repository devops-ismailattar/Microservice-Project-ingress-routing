const express = require("express");
const app = express();

const page = `
  <h1>Payment Service</h1>
  <p>Payment completed successfully</p>
  <a href="/login">
    <button>Logout</button>
  </a>
`;

app.get("/", (req, res) => {
  res.send(page);
});

app.get("/payment", (req, res) => {
  res.send(page);
});

app.listen(3003, () => {
  console.log("Payment app running on port 3003");
});

