# AI & Robotics Summer Workshop — Full-Stack Project

A production-quality workshop landing page with a Node.js/Express backend API.
Inspired by the design quality of modern kids-activity platforms.

---

## 🗂 Project Structure

```
project/
├── frontend/               # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WorkshopDetails.jsx
│   │   │   ├── LearningOutcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ToastContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/                # Node.js + Express
    ├── server.js
    ├── routes/
    │   └── enquiry.js
    ├── controllers/
    │   └── enquiryController.js
    ├── models/
    │   ├── db.js
    │   └── Enquiry.js
    ├── .env.example
    └── package.json
```

---

## ⚙️ Prerequisites

- Node.js ≥ 18
- npm ≥ 9

---

## 🚀 Local Setup

### 1. Clone / download the project

```bash
git clone <your-repo-url>
cd project
```

### 2. Backend

```bash
cd backend
npm install

# Copy and configure env
cp .env.example .env
# Edit .env — MONGO_URI is optional; server runs without it

npm run dev        # development (nodemon)
# or
npm start          # production
```

Backend runs on **http://localhost:5000**

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:5173**

The Vite dev server proxies `/api/*` to the Express backend automatically — no CORS issues in development.

---

## 🔑 Environment Variables

Copy `backend/.env.example` to `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/workshop
CLIENT_URL=http://localhost:5173
```

`MONGO_URI` is **optional**. Without it the server stores registrations in memory (lost on restart). With it, every submission is persisted to MongoDB.

---

## 📡 API Reference

### POST `/api/enquiry`

Register a student.

**Request body**
```json
{
  "name": "Love Sharma",
  "email": "parent@example.com",
  "phone": "9876543210"
}
```

**Success (201)**
```json
{ "success": true, "message": "Registration submitted successfully." }
```

**Validation error (400)**
```json
{ "success": false, "message": "All fields are required." }
```

---

## 🌐 Deployment

### Frontend → Vercel

1. Push `frontend/` to a GitHub repo.
2. Import in [vercel.com](https://vercel.com) → **New Project**.
3. Build command: `npm run build` | Output: `dist`.
4. Add environment variable `VITE_API_URL=https://your-backend.onrender.com`.
5. Update `vite.config.js` proxy target (or use the env var in `fetch` calls).

### Backend → Render

1. Push `backend/` to GitHub.
2. Create a **New Web Service** on [render.com](https://render.com).
3. Build command: `npm install` | Start command: `node server.js`.
4. Add env vars: `MONGO_URI`, `CLIENT_URL` (your Vercel URL), `PORT=10000`.

### Alternatively: Railway

1. Install Railway CLI: `npm i -g @railway/cli`
2. `cd backend && railway init && railway up`
3. Set env vars in the Railway dashboard.

---

## 🐙 Git Commit Suggestions

```
feat: initialize project with frontend/backend scaffold
feat(backend): add Express server with CORS and JSON middleware
feat(backend): add POST /api/enquiry route with validation
feat(backend): add Mongoose Enquiry model and MongoDB connection
feat(frontend): add Vite + React + Tailwind setup
feat(frontend): implement Hero section with animated gradient
feat(frontend): add WorkshopDetails info cards
feat(frontend): add LearningOutcomes grid section
feat(frontend): implement FAQ accordion component
feat(frontend): build RegistrationForm with validation and API call
feat(frontend): add global Toast notification system
feat(frontend): add sticky Navbar with mobile hamburger menu
feat(frontend): add Footer with quick links
feat(frontend): implement smooth scroll and responsive layout
chore: add README, .env.example, and deployment notes
```

---

## ✅ Features Checklist

| Feature | Status |
|---|---|
| Hero section with CTA | ✅ |
| Workshop details cards | ✅ |
| 6 learning outcomes | ✅ |
| FAQ accordion (6 items) | ✅ |
| Registration form | ✅ |
| Client-side validation | ✅ |
| Loading spinner | ✅ |
| Toast notifications | ✅ |
| POST /api/enquiry | ✅ |
| MongoDB schema (Mongoose) | ✅ |
| In-memory fallback | ✅ |
| Sticky responsive navbar | ✅ |
| Mobile-first design | ✅ |
| Smooth scrolling | ✅ |
| SEO meta tags | ✅ |
| Accessible ARIA labels | ✅ |
| Reduced motion support | ✅ |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 18 (Vite) |
| Styling | Tailwind CSS 3 |
| Backend | Node.js + Express 4 |
| Database | MongoDB (Mongoose) |
| Dev server proxy | Vite proxy → Express |

---

*Built for interview-readiness: clean architecture, commented code, production patterns.*
