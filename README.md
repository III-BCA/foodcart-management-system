Food Cart Shop Management System:
A full‑stack Food Cart Shop Management application built using Spring Boot (Backend) and React (Frontend) with H2 Database, implementing CRUD operations, CI/CD pipeline, SonarQube analysis, Dockerization, and cloud deployment.
This project is designed as a mini final year project and follows industry‑level best practices.

Live Demo:
Frontend (Vercel): https://foodcart-management-system-frontend.vercel.app/

Features:
  Frontend (React)
      View food menu items
      Add new menu items
      Update existing menu items
      Delete menu items
      Responsive UI
      Deployed on Vercel

  Backend (Spring Boot)
      RESTful CRUD APIs
      Spring Data JPA
      H2 file‑based database
      CORS enabled for frontend
      Dockerized backend

Tech Stack:

Frontend:	React, Axios, HTML, CSS
Backend:	Spring Boot, Java 17, JPA
Database:	H2 (File‑Based)
CI/CD:	GitHub Actions
Code Quality:	SonarQube / SonarCloud
Containerization:	Docker
Deployment:	Vercel (Frontend)

SonarQube Code Analysis:
  Static code analysis for,
     Bugs
     Vulnerabilities
     Code smells

Docker Support:
  Backend Docker Image
     docker build -t foodcart-backend .

CI/CD Pipeline:
    GitHub Actions triggered on every push
     Steps include:
       Build project
       Run tests
       SonarQube analysis
       Docker image build
       Automatic deployment

Database Configuration:
    H2 database
    H2 Console:
      http://localhost:8080/h2-console

API Endpoints:
  GET 	    /api/menu	     Get all menu items
  POST	    /api/menu	     Add new menu item
  PUT	    /api/menu/{id}	 Update menu item
  DELETE	/api/menu/{id}	 Delete menu item
