# Student Portfolio Website

A modern, responsive student portfolio website built with React and Node.js, featuring a dark/light mode toggle and MongoDB backend for contact form submissions.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Modern Sections**: About Me, Projects, Skills, Certifications, Testimonials, Contact
- **Contact Form**: Messages stored in MongoDB database
- **Smooth Animations**: Purple flowing wave background with micro-interactions
- **Professional Layout**: Clean, Apple-level design aesthetics

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Lucide React (icons)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd student-portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Edit the `.env` file with your MongoDB connection string.

4. Start the development server
```bash
npm run dev
```

This will start both the React development server (port 3000) and the Node.js backend server (port 5000).

## Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

For production, use MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit a new contact message
- `GET /api/contacts` - Get all contact messages (admin)
- `PATCH /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete a message

### Contact Message Schema
```javascript
{
  name: String (required),
  email: String (required),
  address: String (optional),
  message: String (required),
  createdAt: Date,
  isRead: Boolean
}
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── server/
│   └── server.js
├── package.json
└── vite.config.js
```

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku/DigitalOcean)
1. Set environment variables in your hosting platform
2. Deploy the project with `server/server.js` as the entry point

## Customization

### Personal Information
Update the following in the respective components:
- Profile image and details in `AboutMe.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- Certifications in `Certifications.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Contact.jsx`

### Styling
The project uses Tailwind CSS. Modify the color scheme by updating the purple and pink color classes throughout the components.

## Contact Database

All contact form submissions are stored in MongoDB with the following information:
- Name
- Email address  
- Address/Location
- Message
- Timestamp
- Read status

## License

This project is open source and available under the [MIT License](LICENSE).