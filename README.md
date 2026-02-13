## REGRIP COMPANY ASSIGNMENT

## Overview
This project is a simplified Kanban Board application built using React.js and Tailwind CSS.  
It demonstrates Optimistic UI updates, simulated API interactions, and automatic rollback on failure.

---

## GitHub Repository
https://github.com/dineshsingh099/regrip-company-assignment

---

## 🛠 Tech Stack
- React.js
- Context API
- React Router
- Tailwind CSS
- JavaScript (ES6+)

---

## Features

### Mock Authentication
- Accepts any non-empty username
- Persistent login using localStorage
- Logout functionality

### Kanban Board
- Three columns: To Do, In Progress, Done
- Add new tasks
- Move tasks between columns
- Delete tasks

### Optimistic UI
- UI updates instantly on user action
- Simulated 1–2 second API delay
- 20% random failure simulation
- Automatic rollback on failure
- Error toast notification

---

## ⚙️ How to Run Locally

1. Clone the repository:
git clone https://github.com/dineshsingh099/regrip-company-assignment


2. Install dependencies:
  npm install
  
3. Start development server:
   npm run dev

4. Open in browser:
   http://localhost:5173

---

## Optimistic UI Approach

When a user performs an action (Add, Move, Delete):

1. The UI updates immediately.
2. The previous state is stored.
3. A mock API call is triggered.
4. If the API fails (20% chance), the previous state is restored.
5. A toast error message is displayed.

This ensures fast user experience while maintaining data consistency.

---

## Author
Dinesh Singh  
Frontend Developer Candidate

