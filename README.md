# 🎓 Student Career Advisor & Recommendation System (MERN + AI)

> An intelligent, AI-assisted career advisory platform for students. It analyzes student profiles, technical skills, domain interests, and assessment results to deliver transparent career recommendations, skill-gap analysis, adaptive learning roadmaps, and personalized AI guidance.

---

## 🌟 Key Features

1. **Student Profiling & Interactive Skill Picker**:
   - Academic background capture (College, Branch, Year, CGPA, Target Domains).
   - Tag-based multi-category skill selection with granular proficiency levels (*Beginner*, *Intermediate*, *Advanced*).

2. **Interest & Career Assessment Quiz**:
   - Interactive quiz assessing domain affinity across Web Dev, AI/ML, Cloud/DevOps, Cybersecurity, Data Science, Mobile Dev, etc.
   - Calculates a domain interest vector for personalized weighting.

3. **Smart Career Recommendation Engine**:
   - Transparent scoring engine calculating weighted compatibility:
     $$\text{Match Score} = w_1 \cdot \text{Skill Match} + w_2 \cdot \text{Interest Score}$$
   - Ranked career roles with clear explanation badges (*"Why this match?"*).

4. **Deep Skill Gap Analysis**:
   - Compares current student capabilities with core and secondary industry requirements.
   - Visual breakdown of **Acquired Skills (✓)** vs. **Missing Competencies (✗)**.

5. **Personalized Dynamic Learning Roadmap**:
   - Generates custom monthly/weekly milestones based on target career and available timeframe (e.g., 3 months, 6 months).
   - Automatically skips already mastered skills to maximize learning velocity.

6. **Interactive Dashboard & Progress Tracker**:
   - Real-time progress bar, next actionable skill pill, checkable milestone tasks saved to database.

7. **AI Career Assistant (Gemini Copilot)**:
   - Profile-aware AI chatbot offering tailored project suggestions, resume guidance, interview preparation, and 30-day study schedules.

---

## 📁 Project Architecture & Folder Structure

```
student-career-recommendation-system/
├── backend/                       # Express + Node.js + MongoDB API
│   ├── config/                    # Database & Gemini AI configurations
│   │   ├── db.js
│   │   └── gemini.js
│   ├── controllers/               # Business logic controllers
│   │   ├── authController.js
│   │   ├── profileController.js
│   │   ├── assessmentController.js
│   │   ├── recommendationController.js
│   │   ├── roadmapController.js
│   │   └── aiController.js
│   ├── models/                    # Mongoose Data Models
│   │   ├── User.js
│   │   ├── Profile.js
│   │   ├── CareerRole.js
│   │   ├── AssessmentQuestion.js
│   │   └── Roadmap.js
│   ├── routes/                    # Express API endpoints
│   │   ├── authRoutes.js
│   │   ├── profileRoutes.js
│   │   ├── assessmentRoutes.js
│   │   ├── recommendationRoutes.js
│   │   ├── roadmapRoutes.js
│   │   └── aiRoutes.js
│   ├── middleware/                # JWT Auth & Error Handling middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── engine/                    # Core Algorithms
│   │   ├── recommendationEngine.js
│   │   └── roadmapGenerator.js
│   ├── data/                      # Initial Dataset & Seeders
│   │   ├── careerRolesData.js
│   │   ├── questionsData.js
│   │   └── seed.js
│   ├── .env.example
│   ├── .env
│   ├── package.json
│   └── server.js                  # Express Entry point
│
├── frontend/                      # React + Vite Client Application
│   ├── public/                    # Static assets & icons
│   ├── src/
│   │   ├── assets/                # Images & styles
│   │   ├── components/            # Reusable UI components (Navbar, Cards, Modals, Badges)
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── SkillPicker.jsx
│   │   │   ├── MatchCard.jsx
│   │   │   ├── GapAnalyzer.jsx
│   │   │   ├── RoadmapTimeline.jsx
│   │   │   └── AIChatDrawer.jsx
│   │   ├── context/               # Global state (AuthContext, AdvisorContext)
│   │   │   ├── AuthContext.jsx
│   │   │   └── AdvisorContext.jsx
│   │   ├── pages/                 # Full view pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ProfileSetup.jsx
│   │   │   ├── Assessment.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   ├── RoadmapView.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/              # Axios/Fetch API client wrappers
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css              # Custom CSS Design System
│   ├── .env.example
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── package.json                   # Root monorepo script helper
└── README.md
```

---

## 🚀 Quick Setup Guide

### 1. Prerequisites
- **Node.js**: v18+ installed
- **MongoDB**: Local MongoDB instance running (`mongodb://127.0.0.1:27017`) or MongoDB Atlas URI
- **Gemini API Key**: From [Google AI Studio](https://aistudio.google.com/)

### 2. Install Dependencies
From the root directory:
```bash
npm run install:all
```
*Or install separately:*
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure Environment Variables
- In `backend/.env`:
  ```env
  PORT=5000
  NODE_ENV=development
  MONGO_URI=mongodb://127.0.0.1:27017/student_career_advisor
  JWT_SECRET=your_jwt_secret_key
  GEMINI_API_KEY=your_gemini_api_key
  CLIENT_URL=http://localhost:5173
  ```
- In `frontend/.env`:
  ```env
  VITE_API_BASE_URL=http://localhost:5000/api
  ```

### 4. Seed Career Roles & Assessment Questions
```bash
npm run seed
```

### 5. Start Development Servers
- **Start Backend:**
  ```bash
  npm run backend
  # Server runs on http://localhost:5000
  ```
- **Start Frontend:**
  ```bash
  npm run frontend
  # Client runs on http://localhost:5173
  ```

---

## 🧪 Recommendation Scoring Formula

$$\text{Skill Match Score} = \frac{\sum_{s \in \text{Matched Skills}} \text{ProficiencyWeight}(s)}{\sum_{r \in \text{Required Skills}} \text{MaxProficiencyWeight}(r)} \times 100$$

$$\text{Total Match Score} = (\text{Skill Match Score} \times 0.70) + (\text{Domain Interest Score} \times 0.30)$$

---

## 📜 License
ISC License. Built for students to discover and excel in their ideal career paths.
