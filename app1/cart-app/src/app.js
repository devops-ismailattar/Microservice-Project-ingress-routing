const express = require("express");
const app = express();

// Serve static files like CSS
app.use(express.static("public"));

const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart Service</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #0073e6;
      color: white;
      padding: 20px;
      text-align: center;
    }
    main {
      padding: 30px;
      text-align: center;
    }
    h1 {
      color: #0073e6;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #28a745;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #218838;
    }
    footer {
      margin-top: 50px;
      font-size: 14px;
      color: #777;
    }
  </style>
</head>
<body>
  <header>
    <h1>Cart Service</h1>
  </header>
  <main>
    <p>Items added to your cart successfully!</p>
    <a href="/payment">
      <button>Proceed to Payment</button>
    </a>
  </main>
  <footer>
    &copy; 2026 My E-Commerce App
  </footer>
</body>
</html>
`;

app.get("/", (req, res) => res.send(page));
app.get("/cart", (req, res) => res.send(page));

app.listen(3002, () => {
  console.log("Cart app running on port 3002");
});

//#endregion