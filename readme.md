<h3 align="center"> 🏕️ YelpCamp Project</h3>

<p align="center"> A full-stack web application for discovering, creating, and reviewing campgrounds.<br/>
  Built with Node.js, Express, MongoDB, and EJS following an MVC architecture.
    <br> 
</p>

<p align="center">
  <a href="https://yelpcamp-9m0g.onrender.com/">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/EJS-8C8C8C?style=flat" alt="EJS">
  <img src="https://img.shields.io/badge/Passport.js-34E27A?style=flat" alt="Passport.js">
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat" alt="Cloudinary">
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Features](#features)
- [Tech Stack](#tech_stack)
- [Prerequisites](#prerequisites)
- [Dependencies Overview](#dependencies)
- [Folder Structure](#folder_structure)
- [Installation](#installation)
- [Running the App](#running_app)
- [Seeding the Database](#database)
- [Security Practices](#security)
- [Learning Goals](#learning_goals)
- [Credits](#credits)
- [License](#license)

## 🧐 About <a name = "about"></a>

A full‑stack Node.js web application for discovering, creating, and reviewing campgrounds. This project follows a classic MVC architecture and demonstrates authentication, authorization, image uploads, security best practices, and RESTful routing.

## 🏁 Getting Started <a name = "getting_started"></a>

### 🚀 Features <a name = "features"></a>

- User authentication & authorization (Passport.js)
- Campground CRUD operations
- Image uploads with Cloudinary
- Reviews and ratings
- Server‑side validation with Joi
- Security hardening (Helmet, Mongo sanitize)
- Flash messages for UX feedback
- RESTful routing & MVC structure

### 🧰 Tech Stack <a name = "tech_stack"></a>

- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Frontend: EJS, EJS‑Mate
- Authentication: Passport, Passport‑Local
- File Uploads: Multer, Cloudinary
- Validation & Security: Joi, Helmet, express‑mongo‑sanitize

### ⚡ Prerequisites <a name = "prerequisites"></a>

- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)
- **MongoDB**
  - Local installation **or**
  - MongoDB Atlas account
- A **Cloudinary account** (for image uploads)
- Git (for cloning the repository)

### 📦 Dependencies Overview <a name = "dependencies"></a>

- express Web framework
- mongoose MongoDB ODM
- ejs / ejs‑mate Templating engine & layouts
- passport Authentication
- passport‑local Username/password strategy
- passport‑local‑mongoose User model helpers
- express‑session Session management
- connect‑mongo Store sessions in MongoDB
- connect‑flash / flash Flash messages
- multer File uploads
- multer‑storage‑cloudinary Cloudinary storage
- cloudinary Image hosting
- dotenv Environment variables
- method‑override PUT & DELETE support
- joi Data validation
- sanitize‑html XSS protection
- express‑mongo‑sanitize NoSQL injection protection
- helmet Secure HTTP headers

## 🔧 Folder Structure <a name = "folder_structure"></a>

    YELPCAMP/
    │
    ├── .vscode/ # Editor configuration
    ├── cloudinary/ # Cloudinary configuration
    ├── controllers/ # Route controller logic
    ├── models/ # Mongoose models
    ├── node_modules/ # Dependencies
    ├── public/ # Static assets (CSS, JS, images)
    ├── routes/ # Express route definitions
    ├── seeds/ # Database seed scripts
    ├── utils/ # Utility helpers (error handling, async wrappers)
    ├── views/ # EJS templates
    │
    ├── .env # Environment variables
    ├── .gitignore # Git ignored files
    ├── app.js # Application entry point
    ├── middleware.js # Custom middleware
    ├── package.json # Project metadata & dependencies
    ├── package-lock.json # Dependency lock file
    ├── README.md # Project documentation
    └── schemas.js # Joi validation schemas

## ⚙️ Installation <a name = "installation"></a>

### Clone the repository

1. Clone the repository

```bash
git clone https://github.com/yourusername/yelpcamp.git
cd yelpcamp
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file (see `.env.example`)

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=mongodb://localhost:27017/yelp-camp
```

4. Start MongoDB locally or connect to Atlas

## ▶️ Running the App <a name = "running_app"></a>

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

App runs on:

```bash
http://localhost:3000
```

## 🌱 Seeding the Database <a name = "database"></a>

```bash
node seeds/index.js
```

## 🔐 Security Practices <a name = "security"></a>

- Sanitized user input (MongoDB & HTML)
- Secure headers via Helmet
- Session storage in MongoDB
- Environment variables for secrets

## 📚 Learning Goals <a name = "learning_goals"></a>

- MVC architecture in Express
- Authentication & authorization flows
- Image upload pipelines
- Secure Node.js applications
- Full‑stack CRUD patterns

## 📘 Credits <a name = "credits"></a>

This project was built as a learning exercise following a tutorial.
Design inspiration and instructional guidance provided by:

- Colt Steele (The Web Developer Bootcamp)

This repository represents my own implementation and customization of the project.

## 📄 License <a name = "license"></a>

This project is licensed under the ISC License.
You are free to use, modify, and distribute it.
