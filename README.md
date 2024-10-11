# LearnSphere - Online Education Platform

## Project Description

**LearnSphere** is a fully functional ed-tech platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform enables users to create, consume, and rate educational content, making education more accessible and engaging for students while providing instructors with a space to showcase their expertise.

### Key Features

- **Seamless Learning Experience**: Interactive and engaging content for students.
- **Instructors' Platform**: Instructors can create and manage courses and connect with learners worldwide.
  
---

## System Architecture

StudyNotion follows a client-server architecture, consisting of three main components:

1. **Front-end**: Built using ReactJS for dynamic and responsive user interfaces.
2. **Back-end**: Built using Node.js and Express.js for handling API requests and processing business logic.
3. **Database**: MongoDB for flexible, scalable data storage.

---

## Front-end

The front end provides students, instructors, and admin users with intuitive pages to interact with the platform.

### For Students
- **Homepage**: Brief platform introduction and course list.
- **Course List**: Displays all courses with descriptions and ratings.
- **Wishlist**: Shows saved courses.
- **Cart Checkout**: Completes course purchases.
- **Course Content**: Displays videos and course material.
- **User Details**: Shows account details.
- **User Edit Details**: Allows users to edit their account information.

### For Instructors
- **Dashboard**: Overview of courses, ratings, and feedback.
- **Insights**: Detailed views on metrics such as views, clicks, etc.
- **Course Management**: Allows instructors to create, update, and delete courses and manage pricing.
- **Profile Management**: View and edit account details.

### For Admin (Future Scope)
- **Dashboard**: Platform overview including courses, instructors, and students.
- **Insights**: Platform-wide metrics (e.g., users, courses, revenue).
- **Instructor Management**: Admin can manage instructor accounts and courses.

### Front-end Technologies
- **React.js**: Framework for building user interfaces.
- **CSS & Tailwind CSS**: For styling and responsiveness.
- **Redux**: For state management across the application.

---

## Back-end

### Description

The back end of LearnSphere is built using Node.js and Express.js, with MongoDB as the primary database. It uses a monolithic architecture and provides RESTful APIs for the front-end to consume.

### Features and Functionalities

- **User Authentication & Authorization**: Secure sign-up/login using JWT and password hashing with Bcrypt. OTP verification and password reset are also supported.
- **Course Management**: Instructors can create, update, delete, and manage courses.
- **Payment Integration**: Razorpay is integrated for course payments.
- **Cloud-based Media Management**: Cloudinary is used for media content storage and management.
- **Markdown Support**: Course content stored in Markdown format for easier rendering.

### Back-end Technologies
- **Node.js**: Back-end framework.
- **Express.js**: Web application framework.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure authentication.
- **Bcrypt**: For password hashing.

---

## Data Models & Database Schema

### Key Schemas
- **Student Schema**: Fields like name, email, password, and enrolled courses.
- **Instructor Schema**: Fields like name, email, password, and instructor’s courses.
- **Course Schema**: Includes course details such as name, description, instructor, and media content.

---

## API Design

The LearnSphere platform follows REST architecture, with APIs implemented using Node.js and Express.js. The APIs exchange data in JSON format and follow standard HTTP methods.

### Sample API Endpoints

- **User Authentication**
  - `POST /api/auth/signup`: Sign up a new user.
  - `POST /api/auth/login`: Log in an existing user.
  - `POST /api/auth/verify-otp`: Verify OTP for email validation.
  - `POST /api/auth/forgot-password`: Send a password reset link to email.
  
- **Course Management**
  - `GET /api/courses`: Fetch all available courses.
  - `GET /api/courses/:id`: Fetch a specific course by ID.
  - `POST /api/courses`: Create a new course.
  - `PUT /api/courses/:id`: Update a course.
  - `DELETE /api/courses/:id`: Delete a course.
  - `POST /api/courses/:id/rate`: Rate a course.
