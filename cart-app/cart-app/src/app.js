const express = require("express");
const app = express();

const page = `
  <h1>Cart Service</h1>
  <p>Items added to cart</p>
  <a href="/payment">
    <button>Go to Payment</button>
  </a>
`;

app.get("/", (req, res) => {
  res.send(page);
});

app.get("/cart", (req, res) => {
  res.send(page);
});

app.listen(3002, () => {
  console.log("Cart app running on port 3002");
});

