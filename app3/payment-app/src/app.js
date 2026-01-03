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
  <title>Payment Service</title>

  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #89f7fe, #66a6ff);
      color: #333;
    }

    header {
      background: #ffffff;
      padding: 20px 40px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    header h1 {
      margin: 0;
      color: #1e3c72;
    }

    header span {
      font-size: 14px;
      color: #555;
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
      color: #1e3c72;
      margin-bottom: 20px;
    }

    .card p {
      font-size: 16px;
      color: #555;
    }

    .btn {
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: white;
      border: none;
      padding: 12px 25px;
      font-size: 16px;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-top: 20px;
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
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>

<body>
  <header>
    <h1>Payment Service</h1>
    <span>Created by Ismail Attar</span>
  </header>

  <main>
    <div class="card">
      <h2>Payment Successful!</h2>
      <p>Your transaction has been completed.</p>
      <a href="/login">
        <button class="btn">Logout</button>
      </a>
    </div>
  </main>

  <footer>
    © 2026 E-Commerce Microservices | Developed by Ismail Attar
  </footer>
</body>
</html>
`;

app.get("/", (req, res) => res.send(page));
app.get("/payment", (req, res) => res.send(page));

app.listen(3003, () => {
  console.log("💳 Payment app running on port 3003");
});
