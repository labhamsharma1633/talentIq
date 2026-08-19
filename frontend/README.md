# Talent-IQ

### Real-Time Technical Interview Platform

Talent-IQ is a collaborative technical interview platform designed to make remote coding interviews more interactive and structured.

It brings the essential parts of a technical interview — **video communication, collaborative coding, interview problems, and real-time sessions** — into a single workspace.

Instead of switching between a video meeting, coding editor, problem statement, and other tools, Talent-IQ provides a unified environment where interviewers and candidates can collaborate during a live technical interview.

---

## Overview

Technical interviews often require multiple tools at the same time:

* A video communication platform
* A collaborative code editor
* A coding problem
* A way to manage interview sessions
* A way for the interviewer and candidate to communicate while solving problems

Talent-IQ combines these capabilities into one application.

The platform allows users to create interview sessions, collaborate in real time, communicate through video, and work on coding problems together.

---

## Core Features

### 1. Real-Time Interview Sessions

Talent-IQ provides dedicated sessions for conducting technical interviews.

An interviewer can create a session and use it as a shared workspace for the interview.

The dashboard provides visibility into active and previous sessions.

---

### 2. Collaborative Coding

The platform provides a shared coding environment where participants can work together during an interview.

The goal is to reproduce the collaborative experience of a real engineering interview rather than treating the coding challenge as a static form.

---

### 3. Live Video Communication

Talent-IQ integrates video communication directly into the interview experience.

This allows the interviewer and candidate to communicate while working on the coding problem without requiring a separate communication application.

---

### 4. Coding Problems

The platform includes a dedicated problem section where coding problems can be browsed and selected for interview sessions.

Problems can be used as the basis for technical discussions and collaborative coding exercises.

---

### 5. Multi-Language Coding

The coding environment is designed to support multiple programming languages, allowing interview sessions to be adapted to the candidate's preferred language.

---

### 6. Interview Dashboard

The dashboard provides an overview of the user's interview activity.

It includes information such as:

* Active sessions
* Total sessions
* Live sessions
* Session creation
* Problem access

The dashboard acts as the central entry point for starting and managing interview sessions.

---

### 7. Authentication

Talent-IQ uses Clerk for authentication and user management.

Authenticated users can access the application's protected functionality and their interview workspace.

---

## Application Flow

A typical Talent-IQ workflow looks like this:

```text
User
  │
  ▼
Authentication
  │
  ▼
Dashboard
  │
  ├──────────────► Browse Problems
  │
  ▼
Create Interview Session
  │
  ▼
Invite / Join Session
  │
  ├──────────────► Video Communication
  │
  ├──────────────► Collaborative Coding
  │
  └──────────────► Coding Problem
  │
  ▼
Complete Interview
```

The application is structured around the interview session, allowing the different parts of the interview to work together rather than existing as disconnected features.

---

# Tech Stack

## Frontend

### React

The user interface is built using React.

React is used to break the application into reusable components and manage the application's interactive state.

### Vite

Vite is used as the frontend build tool and development server.

### Tailwind CSS

Tailwind CSS is used for styling and responsive layouts.

It allows the interface to maintain consistent spacing, typography, colors, and responsive behavior.

### DaisyUI

DaisyUI is used alongside Tailwind CSS for reusable UI components and styling utilities.

### Lucide React

Lucide icons are used throughout the interface for navigation, actions, status indicators, and visual feedback.

### React Router

React Router is used to manage client-side navigation between pages such as:

* Home
* Dashboard
* Problems
* Problem details
* Interview sessions

### Clerk

Clerk provides authentication and user management.

---

## Backend

The backend is built using:

* Node.js
* Express.js
* MongoDB
* Mongoose
* WebSockets

The backend is responsible for application APIs, authentication-related operations, interview session management, and real-time communication.

---

# Project Structure

```text
talentIq/
│
├── backend/
│   ├── ...
│   └── package.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── API communication
│   │   │
│   │   ├── assets/
│   │   │   └── Images and static frontend assets
│   │   │
│   │   ├── components/
│   │   │   └── Reusable UI components
│   │   │
│   │   ├── data/
│   │   │   └── Application data and configuration
│   │   │
│   │   ├── hooks/
│   │   │   └── Reusable React hooks
│   │   │
│   │   ├── lib/
│   │   │   └── Shared frontend utilities
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── ProblemsPage.jsx
│   │   │   ├── ProblemPage.jsx
│   │   │   └── SessionPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── package.json
```

---

# Pages

## Home Page

The homepage introduces Talent-IQ and communicates the platform's primary value proposition.

It provides the main entry point for users who want to start using the platform.

The homepage is designed as the product's marketing and discovery experience.

---

## Dashboard

The dashboard provides an authenticated user's central workspace.

It provides access to:

* Active sessions
* Previous sessions
* Session creation
* Problems
* Interview activity

---

## Problems

The Problems page provides access to the available coding problems.

Users can browse problems that can be used during technical interviews.

---

## Problem

The Problem page provides the details of an individual coding problem.

It acts as the problem-solving interface used during the interview workflow.

---

## Session

The Session page represents the live technical interview environment.

It brings together the core interview experience:

```text
┌────────────────────────────────────────────┐
│              Talent-IQ Session             │
├───────────────────────┬────────────────────┤
│                       │                    │
│   Video / Candidate   │   Problem         │
│                       │                    │
├───────────────────────┴────────────────────┤
│                                           │
│              Code Editor                  │
│                                           │
├───────────────────────────────────────────┤
│              Run / Execute                │
└───────────────────────────────────────────┘
```

The session is the core product experience where the interviewer and candidate collaborate.

---

# Local Development

## Prerequisites

Before running the project locally, make sure you have:

* Node.js
* npm
* MongoDB
* Git

---

## Clone the Repository

```bash
git clone https://github.com/labhamsharma1633/talentIq.git
```

Move into the project:

```bash
cd talentIq
```

---

# Frontend Setup

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide a local URL, usually similar to:

```text
http://localhost:5173
```

---

# Backend Setup

Open another terminal and move into the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create the required environment configuration.

Start the backend development server using the project's configured command.

---

# Environment Variables

The application requires environment variables for services such as authentication, database access, and backend communication.

Create the appropriate `.env` files for the frontend and backend.

Example frontend configuration:

```env
VITE_API_URL=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Example backend configuration:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
```

Do not commit real secrets or API keys to GitHub.

Use `.env` files locally and configure environment variables through the deployment platform when deploying the application.

---

# Responsive Design

The frontend is designed to work across different screen sizes.

The primary responsive targets include:

* Mobile devices
* Tablets
* Desktop screens

The homepage and application layouts use responsive Tailwind CSS utilities to adapt navigation, grids, spacing, and content across viewport sizes.

---

# Real-Time Architecture

Real-time functionality is an important part of Talent-IQ.

The application uses WebSocket-based communication where real-time interaction is required.

Conceptually:

```text
Candidate Browser
       │
       │ WebSocket
       ▼
┌───────────────────┐
│   Backend Server  │
└───────────────────┘
       ▲
       │ WebSocket
       │
Interviewer Browser
```

This architecture allows participants to communicate changes during an active interview session without relying entirely on traditional request/response cycles.

---

# Design Principles

The Talent-IQ interface follows several design principles:

### Focused Workflow

The interface prioritizes the actions required during a technical interview.

### Clear Visual Hierarchy

Important actions such as creating or joining an interview session are visually emphasized.

### Developer-Oriented Interface

The visual language uses a dark interface, technical typography, and accent colors suited to a coding environment.

### Minimal Distraction

The interview environment should keep attention on the candidate, problem, communication, and code.

---

# Deployment

The frontend can be deployed using platforms such as Vercel or Netlify.

The backend can be deployed independently using a Node.js-compatible hosting platform.

For production deployment:

1. Configure environment variables.
2. Build the frontend.
3. Deploy the frontend.
4. Deploy the backend.
5. Update the frontend API URL.
6. Verify authentication.
7. Verify database connectivity.
8. Test the live interview workflow.

---

# Project Goals

Talent-IQ was built around a simple idea:

> Technical interviews should feel like collaborative engineering sessions, not disconnected tools.

The project aims to provide a single workspace where interviewers and candidates can communicate, solve problems, and collaborate during a live technical interview.

---

# Future Improvements

Potential future improvements include:

* Interview recording and playback
* Structured candidate evaluation
* Interview analytics
* Interview history and reports
* More coding language support
* Better session moderation
* Code execution sandbox improvements
* Candidate performance insights
* Interview templates
* Team and organization support

---

# Author

**Labham Sharma**

B.Tech Computer Science & Engineering

Talent-IQ is a personal software project focused on building a collaborative technical interview experience using modern full-stack technologies.
