# Simple ToDo Web App

A basic ToDo web application with full CRUD (Create, Read, Update, Delete) functionality. The frontend is built to interact with a mock backend using the `json-server` library.

## Features

- View all todos
- Add new todo
- Toggle completed
- Delete todo
- Backend powered by `json-server` (mock API)

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AnkitB92/todo-app-rtk-query.git
cd todo-app-rtk-query
```

2. Install dependencies

```bash
npm install
```

3. Start the Frontend
```bash
npm run dev
```

4. Open New Terminal
- ctrl + shift + ` 


5. Start the Mock Backend
```bash
npm run serve
```

# Project Structure
```
.
├── data/
│   └── db.json
├── src/
│   ├── features/
│   │   ├ api/
│   │   └ todos/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
