# Affiliate-server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**affiliate-server** is the backend server for the [BAZZAR](https://github.com/Sudhir302/affiliate_client.git) E-commerce application. It handles admin authentication, product listing, and stores data using MongoDB Atlas.

---

## 🚀 Features
    - Responsive UI for desktop and mobile
    - Product search with real-time filtering
    - Category-based product listing
    - Admin panel for editing, updating, and deleting products
    - Backend-connected using **Axios** with cookies
    - Admin login with protected routes

---

## 👩‍💻 Technologies Used
- node.js
- express.js
- mongoDB and mongoDB Atlas
- JWT
- Cloudinary

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js installed
- MongoDB Atlas account or mongoDB
- [PingMe-Client](https://github.com/Sudhir302/affiliate_client.git) (Frontend)

### Installation 
1. Clone the repository:
   ```
   https://github.com/Sudhir302/affiliate_server.git
2. Navigate to the project directory:
   ```
   cd affiliate-server
3. Install dependencies:
   ```
   npm install
4. Run the app:
   ```
   npm start

---

### 📁 Folder Structure
```
  PingMe-Server/
  |
  ├── middlewares/
  |       ├── verifytoken.js
  |
  ├── models/
  |       ├── product.js
  |       ├── user.js
  |
  ├── route/
  |       ├── admin.js
  |       ├── google.js
  |       ├── product.js
  |
```
---
  
## 📄 License

This project is licensed under the MIT LICENSE - see the [MIT License](./LICENSE) for details.

## Contact
Sudhir Chaudhary - csudhir302@gmail.com