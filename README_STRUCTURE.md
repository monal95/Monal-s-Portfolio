# Student Portfolio - Full Stack

A modern, responsive student portfolio website with React frontend and Express backend.

## Project Structure

```
Portfolio/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js backend
└── README.md
```

## Quick Start

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`
Backend will be available at `http://localhost:5000`

## Running Both Simultaneously

From the root directory, you can run:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

## Features

### Frontend

- Modern React components with Tailwind CSS
- Responsive design
- Dark/Light mode support
- Smooth scroll animations
- Interactive gradient backgrounds
- Contact form integration

### Backend

- Express.js REST API
- MongoDB integration for contact messages
- CORS enabled
- Contact message management
- Health check endpoint

## API Endpoints

- `POST /api/contact` - Submit contact message
- `GET /api/contacts` - Get all messages (paginated)
- `PATCH /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete message
- `GET /api/health` - Health check

## Technology Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

### Backend

- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## File Structure

```
Portfolio/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json
│   ├── .env              # Environment variables
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/            # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md
```

## Development

Both frontend and backend are now separated for better organization and scalability.

### Adding Dependencies

**Frontend:**

```bash
cd frontend
npm install package-name
```

**Backend:**

```bash
cd backend
npm install package-name
```

## Deployment

### Frontend

The frontend can be built and deployed to any static hosting:

```bash
cd frontend
npm run build
```

### Backend

The backend can be deployed to services like Heroku, Railway, or any Node.js hosting:

```bash
cd backend
npm run dev  # for development
npm start    # for production
```

## License

MIT
