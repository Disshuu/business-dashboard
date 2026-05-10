# Business Dashboard

## Overview

Business Dashboard is a full-stack web application developed using React, FastAPI, and MySQL.
The project provides business analytics and insights through REST APIs and an interactive dashboard interface.

The dashboard displays:

* City-wise business analytics
* Category-wise business analytics
* Source-wise business analytics
* Search and filtering functionality
* Complete business listings table

---

# Tech Stack

## Frontend

* React.js
* Axios
* CSS3

## Backend

* FastAPI
* SQLAlchemy
* PyMySQL
* Pandas

## Database

* MySQL

---

# Features

* REST API integration
* Real-time dashboard analytics
* Interactive UI
* Search functionality
* Database connectivity
* CSV data import
* SQL database dump support

---

# Project Structure

```bash
frontend/
backend/
database/
```

---

# Setup Instructions

## Backend Setup

### Step 1

Create virtual environment

```bash
python -m venv venv
```

### Step 2

Activate environment

```bash
venv\Scripts\activate
```

### Step 3

Install dependencies

```bash
pip install -r requirements.txt
```

### Step 4

Configure environment variables

Create `.env` file:

```env
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=business_dashboard
```

### Step 5

Run FastAPI server

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

## Frontend Setup

### Step 1

```bash
cd frontend
```

### Step 2

```bash
npm install
```

### Step 3

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Database Setup

1. Create MySQL database:

```sql
CREATE DATABASE business_dashboard;
```

2. Import SQL dump:

```bash
business_dashboard.sql
```

3. Run data insertion script:

```bash
python insert_data.py
```

---

# API Endpoints

| Endpoint        | Description            |
| --------------- | ---------------------- |
| /city-wise      | City analytics         |
| /category-wise  | Category analytics     |
| /source-wise    | Source analytics       |
| /all-businesses | Complete business data |

---

# Challenges Faced

* Handling CORS issues between frontend and backend
* Establishing FastAPI and MySQL integration
* Managing API data flow in React
* Creating responsive dashboard UI
* Structuring analytics APIs efficiently

---

# Future Improvements

* Authentication system
* Real-time charts and graphs
* Advanced filtering
* Pagination support
* Deployment on cloud platforms


