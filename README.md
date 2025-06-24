# Bill Payment Web App 💳

A simple and responsive web application that allows users to view and pay different types of bills. Built using React, Firebase Authentication, and Tailwind CSS.

## 🔗 Live Site  
[ https://online-bill-payment-a9.web.app]

## 📌 Project Purpose

This project allows users to log in, view their bills, filter by bill type, and mark bills as paid. It demonstrates the use of modern frontend tools with authentication and route protection.

---

## 🚀 Key Features

- 🔐 Login/Register using Firebase Authentication
- 📄 View all bills or filter by bill type
- ✅ Mark bills as paid (tracked visually)
- 🧾 Bill Details page for each bill
- 🧑‍💼 User profile view and update
- 🔒 Private routing for authenticated pages
- 📱 Fully responsive design
- ⚡ Loading indicator for data fetch
- ❌ Custom error page

---

## 🛠️ Tech Stack

- **React**
- **Swiper**
- **React Icon**
- **React Toastify**
- **React Router DOM**
- **Firebase Auth**
- **Tailwind CSS**
- **React Helmet Async**
- **Vite**
- **Netlify** (Deployment)

---

## 📦 NPM Packages Used

```bash
npm install firebase react-router react-helmet-async

---

📁 Folder Structure

src/
│
├── Components/        # Reusable UI components (e.g. Loading)
├── Context/           # AuthProvider and PrivateProvider
├── Layout/            # Layout components for main and auth routes
├── Pages/             # All pages like Home, Login, PayBills etc.
├── App.jsx            # Root React component
└── main.jsx           # Entry point for Vite


---


🧪 How to Run Locally


1. Clone the project:

git clone https://github.com/programming-hero-web-course1/b11a9-react-authentication-fariya-sultana


2. Navigate to the project folder:

cd your-repo-name


3. Install dependencies:

npm install


4. Create a .env file in the root directory and   add your Firebase config:

VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id


5. Start the development server:

npm run dev


---


✍️ Author

Fariya Sultana
GitHub: https://github.com/fariya-sultana


----------------------------------





