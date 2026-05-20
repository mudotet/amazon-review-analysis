# 📊 Amazon Review Analysis Dashboard

> Big Data analytics system for Amazon, providing insightful views on product reviews through an intuitive dashboard.

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📖 Introduction
This project is a fullstack solution for processing and visualizing product review data from Amazon. The system uses **Spring Boot** to build the API and handles Big Data, while the **ReactJS** front end visualizes the data in a user-friendly manner.

## 🛠 Technologies Used

| Component     | Technologies                        |
| :---          | :---                                |
| **Backend**   | Java Spring Boot, Spring Data MongoDB |
| **Frontend**  | ReactJS, Axios, ChartJS             |
| **Database**  | MongoDB                             |
| **Build Tool**| Maven, NPM                          |

## 📂 Project Structure

```bash
amazon-review-analysis/
├── backend/         # Server Source Code (Spring Boot - Port 8080)
├── frontend/        # Client Source Code (ReactJS - Port 3000)
└── README.md        # Documentation
```

## ⚙️ Prerequisites

Before installing, make sure your machine has:

* [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
* [Node.js & NPM](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

## 🚀 Installation & Run Guide

### 1. Configure Database (MongoDB)
#### Download data from [KAGGLE](https://www.kaggle.com/datasets/yasserh/amazon-product-reviews-dataset?resource=download)
The sample data is in file `7817_1.csv`.

* **Database Name:** `amazon_db`
* **Collection Name:** `reviews`

You can import via MongoDB Compass or use the following command:

```bash
mongoimport --db amazon_db --collection reviews --type csv --headerline --file 7817_1.csv
```

### 2. Run Backend (Server)

Navigate to the backend folder and run the Spring Boot application.

* **Option 1:** Open the `/backend` folder in **IntelliJ IDEA** and click Run.
* **Option 2:** Run via terminal:

```bash
cd backend
./mvnw spring-boot:run
```

> **Note:** Ensure the MongoDB connection configuration in `application.properties` is correct.
> The server will run at: `http://localhost:8080`

### 3. Run Frontend (Client)

Open a new terminal and execute the following commands:

```bash
cd frontend
npm install   # Install dependencies
npm start     # Start the React application
```

> The app will automatically open at: `http://localhost:3000`

---

**Happy Coding!** 🚀
