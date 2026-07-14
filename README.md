# Campus Analytics Hub

A full-stack web app for tracking courses, assignments, study hours, and GPA —
built as a portfolio project to demonstrate full-stack skills (React + TypeScript,
FastAPI, PostgreSQL) for Summer 2027 internship applications.

## Problem it solves

Students juggle deadlines, study time, and grades across scattered tools
(notes apps, spreadsheets, memory). Campus Analytics Hub puts all three in one
dashboard so a student can answer, at a glance: *What's due? Am I studying
enough? Am I on track for my target grade?*

## Tech stack

| Layer    | Technology            |
| -------- | ---------------------- |
| Frontend | React + TypeScript (Vite) + Tailwind CSS |
| Backend  | FastAPI (Python) — *coming Week 2* |
| Database | PostgreSQL — *coming Week 2* |

## Current features (Day 1)

- Dashboard page with:
  - Current GPA (stamp-style badge)
  - Target grade
  - Assignments due this week
  - Weekly study hours vs. goal
  - Study streak
  - Upcoming assignments table (course code, title, due date, status)
  - Weekly study-hours bar chart with a goal line
- Reusable components: `DashboardCard`, `AssignmentTable`
- Data is currently hardcoded sample data — wired to the FastAPI backend
  in Week 2 once auth and the database are in place.

## Planned features

- [ ] User login/signup (JWT auth)
- [ ] Course management (CRUD)
- [ ] Assignment tracking (CRUD)
- [ ] Study session logging
- [ ] GPA calculator
- [ ] Multi-page routing (`/login`, `/courses`, `/assignments`, `/study`, `/analytics`)
- [ ] Deployed live version
- [ ] CSV upload (stretch)
- [ ] AI study recommendations (stretch)

## Project structure

```
campus-analytics-hub/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardCard.tsx
│   │   │   └── AssignmentTable.tsx
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/            # added Week 2
└── README.md
```

## Running locally

```bash
cd frontend
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).


## Roadmap

| Phase | Dates | Focus |
| ----- | ----- | ----- |
| 1 | Jul 14 – Jul 31 | Learn React + FastAPI, build frontend + backend basics |
| 2 | Aug 1 – Aug 20 | Backend + database (auth, CRUD, PostgreSQL) |
| 3 | Aug 21 – Sep 10 | Full frontend dashboard wired to live data |
| 4 | Sep 11 – Sep 20 | Deploy + polish |
