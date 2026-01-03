const express = require("express");
const app = express();

// Serve static files (future use)
app.use(express.static("public"));

const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cart Service</title>

  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #333;
    }

    header {
      background: #ffffff;
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    header h1 {
      margin: 0;
      color: #4a47a3;
    }

    header span {
      font-size: 14px;
      color: #666;
    }

    main {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 140px);
    }

    .card {
      background: white;
      padding: 40px;
      width: 350px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      animation: fadeIn 0.8s ease-in-out;
    }

    .card h2 {
      color: #4a47a3;
      margin-bottom: 10px;
    }

    .card p {
      font-size: 16px;
      color: #555;
      margin-bottom: 25px;
    }

    .btn {
      background: linear-gradient(135deg, #28a745, #20c997);
      color: white;
      border: none;
      padding: 12px 25px;
      font-size: 16px;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }

    footer {
      background: #ffffff;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #777;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>

<body>
  <header>
    <h1>🛒 Cart Service</h1>
    <span>Developed by Ismail Attar</span>
  </header>

  <main>
    <div class="card">
      <h2>Items Added Successfully ✅</h2>
      <p>Your selected products are safely added to the cart.</p>
      <a href="/payment">
        <button class="btn">Proceed to Payment</button>
      </a>
    </div>
  </main>

  <footer>
    © 2026 E-Commerce Microservices | Created by Ismail Attar
  </footer>
</body>
</html>
`;

app.get("/", (req, res) => res.send(page));
app.get("/cart", (req, res) => res.send(page));

app.listen(3002, () => {
  console.log("🛒 Cart app running on port 3002");
});
