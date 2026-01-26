# Backend API

Express.js backend server for portfolio contact management.

## Setup

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running

Development mode with hot reload:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Endpoints

- `POST /api/contact` - Submit a contact message
- `GET /api/contacts` - Get all contact messages
- `PATCH /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete a message
- `GET /api/health` - Health check
