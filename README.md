
# Microservice Project with Ingress Routing

![GitHub Actions](https://github.com/devops-ismailattar/Microservice-Project-ingress-routing/workflows/cicd-pipeline-for-nodejs/badge.svg)
![SonarQube Quality](https://sonarcloud.io/api/project_badges/measure?project=microservice-nodejs-project&metric=alert_status)
![Docker](https://img.shields.io/badge/Docker-ECR-blue)

---

## Author
**Ismail Attar**

---

## About the Project
This is a **Node.js microservices project** simulating a simple e-commerce platform.  
The project includes **three separate microservices**:

1. **Login Service** – Handles user login  
2. **Cart Service** – Manages the shopping cart  
3. **Payment Service** – Handles checkout and payment  

Each service runs as a **separate Node.js application** with its own Docker image, and the services communicate via HTTP.  
The project uses **Ingress routing** for easy access in Kubernetes clusters and is deployed via **Argo CD**.

---

## Tech Stack
- **Node.js & Express** – Backend for all services
- **Docker** – Containerization
- **AWS ECR** – Docker image registry
- **Kubernetes (EKS)** – Container orchestration
- **Argo CD** – GitOps deployment
- **GitHub Actions** – CI/CD pipeline
- **SonarQube** – Code quality & coverage

---

## Services Overview

| Service       | Port | Description                       |
|---------------|------|-----------------------------------|
| Login App     | 3001 | User login page and authentication |
| Cart App      | 3002 | Cart management & item listing    |
| Payment App   | 3003 | Payment processing & checkout     |

---

## Screenshots

### Login Service
![Login](screenshots/login.png)

### Cart Service
![Cart](screenshots/cart.png)

### Payment Service
![Payment](screenshots/payment.png)

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/devops-ismailattar/Microservice-Project-ingress-routing.git
cd Microservice-Project-ingress-routing
