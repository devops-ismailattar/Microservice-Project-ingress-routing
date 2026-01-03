const express = require("express");
const app = express();

const page = `
  <h1>Login Service</h1>
  <form action="/cart" method="get">
    <input placeholder="Username" required /><br><br>
    <input type="password" placeholder="Password" required /><br><br>
    <button type="submit">Login</button>
  </form>
`;

app.get("/", (req, res) => {
  res.send(page);
});

app.get("/login", (req, res) => {
  res.send(page);
});

app.listen(3001, () => {
  console.log("Login app running on port 3001");
});

