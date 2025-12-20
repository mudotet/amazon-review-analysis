# 📊 Amazon Review Analysis Dashboard

> Hệ thống phân tích dữ liệu Big Data từ Amazon, cung cấp cái nhìn sâu sắc về đánh giá sản phẩm thông qua giao diện trực quan.

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📖 Giới thiệu
Dự án này là một giải pháp Fullstack nhằm xử lý và hiển thị dữ liệu đánh giá sản phẩm từ Amazon. Hệ thống sử dụng **Spring Boot** để xây dựng API xử lý dữ liệu lớn và **ReactJS** để hiển thị biểu đồ phân tích (Dashboard).

## 🛠 Công nghệ sử dụng

| Thành phần | Công nghệ |
| :--- | :--- |
| **Backend** | Java Spring Boot, Spring Data MongoDB |
| **Frontend** | ReactJS, Axios, ChartJS |
| **Database** | MongoDB |
| **Build Tool** | Maven, NPM |

## 📂 Cấu trúc dự án

```bash
amazon-review-analysis/
├── backend/         # Mã nguồn Server (Spring Boot - Port 8080)
├── frontend/        # Mã nguồn Client (ReactJS - Port 3000)
└── README.md        # Tài liệu hướng dẫn

```

## ⚙️ Yêu cầu tiên quyết

Trước khi cài đặt, hãy đảm bảo máy của bạn đã cài đặt:

* [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
* [Node.js & NPM](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

## 🚀 Hướng dẫn cài đặt & Chạy dự án

### 1. Cấu hình Database (MongoDB)

Dữ liệu mẫu nằm trong file `7817_1.csv`.

* **Database Name:** `amazon_db`
* **Collection Name:** `reviews`

Bạn có thể import bằng MongoDB Compass hoặc sử dụng lệnh sau:

```bash
mongoimport --db amazon_db --collection reviews --type csv --headerline --file 7817_1.csv

```

### 2. Khởi chạy Backend (Server)

Truy cập vào thư mục backend và chạy ứng dụng Spring Boot.

* **Cách 1:** Mở thư mục `/backend` bằng **IntelliJ IDEA** và nhấn Run.
* **Cách 2:** Chạy bằng dòng lệnh:

```bash
cd backend
./mvnw spring-boot:run

```

> **Lưu ý:** Đảm bảo cấu hình kết nối MongoDB trong `application.properties` đã chính xác.
> Server sẽ chạy tại: `http://localhost:8080`

### 3. Khởi chạy Frontend (Client)

Mở một terminal mới và thực hiện các lệnh sau:

```bash
cd frontend
npm install   # Cài đặt các thư viện phụ thuộc
npm start     # Chạy ứng dụng React

```

> Ứng dụng sẽ tự động mở tại: `http://localhost:3000`

---

## 📸 Demo (Screenshots)

*(Bạn nên thay thế dòng này bằng ảnh chụp màn hình thực tế của Dashboard để dự án trông ấn tượng hơn)*

* *Dashboard tổng quan*
* *Biểu đồ phân tích*

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh. Vui lòng mở Pull Request hoặc Issue để thảo luận về các thay đổi.

---

**Happy Coding!** 🚀

```


Bạn có muốn mình tạo thêm file `.gitignore` cho dự án này không?

```
