# Dust of War

Landing page for a tactical shooter game Dust Of War, built using React, Firebase, and TailwindCSS.

## 📖 Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Creator](#creator)

---

## About
Dust of War is a tactical FPS game inspired by real combat experiences. The landing page showcases information about the game, its development team, and provides a contact form for users to reach out to the developers.

---

## Features
- **Custom Landing Page**: Modern design using TailwindCSS.
- **Contact Form**: Send messages directly to an email using Firebase Functions and Nodemailer.
- **About Us Section**: Details about the game and the team behind it.
- **Social Media Links**: Links to LinkedIn, Instagram, X (Twitter), and Discord.

---

## Technologies Used

- [React](https://reactjs.org/) - Framework for frontend development.
- [Vite](https://vitejs.dev/) - A fast build tool for React.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Firebase](https://firebase.google.com/) - Backend for managing functions.
- [Nodemailer](https://nodemailer.com/) - For sending emails via Firebase Functions.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your computer.
- An active Firebase account.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dust-of-war.git
   cd dust-of-war
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a project in Firebase Console.
   - Download the configuration file and add it to `firebaseConfig.js`.
   - Install Firebase CLI:
     ```bash
     npm install -g firebase-tools
     ```
   - Login to Firebase:
     ```bash
     firebase login
     ```

4. Deploy the functions:
   ```bash
   cd functions
   npm install
   firebase deploy --only functions
   ```

---

## Usage
1. Run the project:
   ```bash
   npm run dev
   ```
2. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## Creator
This project was built by **Yonatan Haba & Ori Atias** and the development team of Dust of War.
