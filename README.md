# memoire. 📝

A modern, responsive, and interactive To-Do List web application built with React, Vite, TailwindCSS, and a mock REST API powered by JSON Server. Designed for productivity, memoire. helps you organize, track, and manage your daily tasks with ease.

![screenshot](client/public/IconHtml.png)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 📝 **Add, Edit, Delete Tasks**: Manage your to-do items efficiently.
- 🔍 **Search**: Instantly filter tasks by title.
- 📅 **Calendar View**: Visualize dates and highlight today.
- 🟢 **Status Tracking**: Mark tasks as On Going, Scheduled, Completed, or Canceled.
- 📊 **Task Summary**: See counts of tasks by status.
- 🕒 **Live Date & Time**: Always know the current date and time.
- 🎨 **Responsive UI**: Clean, modern design with TailwindCSS.
- 🔔 **Toast Notifications**: Get instant feedback on your actions.
- ⚡ **Fast Development**: Powered by Vite for lightning-fast HMR.

---

## Tech Stack

- **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/), [React Toastify](https://fkhadra.github.io/react-toastify/), [SweetAlert2](https://sweetalert2.github.io/)
- **Backend (Mock API)**: [JSON Server](https://github.com/typicode/json-server)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```sh
git clone https://github.com/jeremydezekiel/memoire-todo.git
cd memoire-todo
```

Install dependencies for both client and server:

```sh
cd client
npm install
cd ../server
npm install
```

### Running the App

#### 1. Start the Mock API Server

```sh
cd server
npx json-server --watch db.json --port 3000
```

#### 2. Start the React Client

Open a new terminal:

```sh
cd client
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```
.
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── library/
│   │   └── Pages/
│   ├── index.html
│   └── ...
├── server/
│   └── db.json
├── README.md
└── ...
```

- **client/**: React frontend source code.
- **server/**: JSON Server mock backend and data.

---

## Usage

- **Add a Task**: Enter a task title and click "+AddList".
- **Edit a Task**: Click the edit icon, modify the title, and press Enter.
- **Delete a Task**: Click the delete icon and confirm.
- **Change Status**: Click the colored circle to set a new status.
- **Search**: Use the search bar to filter tasks by title.
- **View Calendar**: See the current month and highlight today.

---

## Screenshots

> _Add screenshots of your app here!_

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## License

[MIT](LICENSE)

---

**Made with ❤️ for Hacktiv8 FERN Phase 1 Challenge 2**
