# CarFlex-Website
# 🚗 CarFlex - Car Rental, Buying & Selling Platform


> A full-stack web application that allows users to **rent, buy, or sell cars** online with secure login, dynamic listings, search filters, and booking functionality.

---

## 📌 Features

### 🚀 Frontend (Angular 18)
- Responsive and dynamic UI using **Angular Material**, **Bootstrap 5**, and **Flex Layout**
- JWT-secured login & registration for **Admin** and **Customer**
- Role-based access control for protected components
- Search filters, car listing cards, booking modules
- Reactive Forms with validations and error messages
- RxJS for data streams and dynamic UI updates
- Lazy loading & standalone components for performance optimization

### 🔧 Backend (Spring Boot)
- RESTful APIs built with **Spring Boot**, **JPA**, **Hibernate**
- Authentication and Authorization with **Spring Security + JWT**
- Global exception handling with `@ControllerAdvice`
- Integration with **MySQL** for persistent storage
- API testing with **Postman** and documentation using **Swagger**

### ☁️ DevOps / Deployment
- Dockerized frontend and backend services
- Microservice orchestration using **Kubernetes**
- Configurable environments via `application.properties`
- CI/CD-ready setup with **Jenkins**

---

## 🛠 Tech Stack

| Frontend       | Backend         | Database | DevOps & Tools         |
|----------------|------------------|----------|-------------------------|
| Angular 18     | Spring Boot      | MySQL    | Docker, Kubernetes, Jenkins |
| Bootstrap 5    | Spring Security  | JPA      | GitHub, Swagger, Postman |
| RxJS, SCSS     | Hibernate, Lombok|          | Maven, Apache Tomcat   |

---

## 📷 Screenshots (Optional)

> (Add screenshots of login page, dashboard, car listing, booking popup, admin panel etc.)

---

## 🔑 Roles & Access

| Role     | Capabilities                              |
|----------|--------------------------------------------|
|  Customer    |Search cars, book rentals, manage profile  |


---

## ⚙️ Setup Instructions

### 🔹 Prerequisites
- Node.js (v18+), Angular CLI
- Java 17+
- MySQL Server
- Docker & Docker Compose (Optional)
- Maven

### 🔹 Clone the Repository
```bash
git clone https://github.com/lavanbharatha/CarFlex-Website.git
cd CarFlex-Website
