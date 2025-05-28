# Full-Stack-MERN-App

A personal fitness exercise tracker built with the MERN stack (MongoDB, Express, React, Node.js).  
Track your exercises, sets, and progress with a modern web interface.

## Features

- Add, edit, and delete exercises
- View all exercises in a table
- Data stored in MongoDB
- Responsive React frontend (Vite)
- RESTful API backend (Express + Mongoose)

## Project Structure

```
Full-Stack-MERN-App/
│
├── vanhaoe_react/      # React frontend (Vite)
│   └── src/
│
├── vanhaoe_rest/       # Express backend (Node.js + Mongoose)
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB database (local or Atlas)

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/Full-Stack-MERN-App.git
cd Full-Stack-MERN-App
```

#### 2. Backend Setup

```sh
cd vanhaoe_rest
npm install
# Create a .env file with your MongoDB connection string and port
# Example .env:
# MONGODB_CONNECT_STRING='your-mongodb-uri'
# PORT=3000
npm start
```

#### 3. Frontend Setup

Open a new terminal:

```sh
cd vanhaoe_react
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

## API Endpoints

- `GET /exercises` - List all exercises
- `POST /exercises` - Add a new exercise
- `GET /exercises/:id` - Get a specific exercise
- `PUT /exercises/:id` - Update an exercise
- `DELETE /exercises/:id` - Delete an exercise

## Environment Variables

Create a `.env` file in `vanhaoe_rest/`:

```
MONGODB_CONNECT_STRING='your-mongodb-uri'
PORT=3000
```

## License

MIT

---

© 2025 Ethan Van Hao

