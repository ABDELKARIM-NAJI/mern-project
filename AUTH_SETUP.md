# MERN Authentication System

This project includes a complete authentication system with sign-up, sign-in, and logout functionality.

## Project Structure

```
server/
├── models/
│   └── User.js              # User schema with password hashing
├── controllers/
│   └── authController.js    # Auth logic (signup, signin, logout)
├── middleware/
│   └── auth.js              # JWT authentication middleware
├── routes/
│   └── authRoutes.js        # Auth endpoints
└── server.js                # Main server file

client/
├── src/
│   ├── pages/
│   │   ├── Signin.jsx       # Sign-in form page
│   │   └── Signup.jsx       # Sign-up form page
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with auth buttons
│   │   └── PrivateRoute.jsx # Protected route component
│   ├── context/
│   │   └── AuthContext.jsx  # Auth state management
│   ├── services/
│   │   └── authService.js   # Auth API calls
│   ├── App.jsx              # Main app with routing
│   └── main.jsx
```

## Setup Instructions

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your MongoDB URI and JWT secret:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-app
   JWT_SECRET=your_secret_key_here
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. The default API URL is already set to `http://localhost:3000/api`

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Endpoints

- **POST** `/api/auth/signup` - Register a new user
  - Body: `{ username, email, password, passwordConfirm }`
  - Returns: `{ success, token, user }`

- **POST** `/api/auth/signin` - Login user
  - Body: `{ email, password }`
  - Returns: `{ success, token, user }`

- **POST** `/api/auth/logout` - Logout user (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ success, message }`

- **GET** `/api/auth/me` - Get current user (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ success, user }`

## Features

✅ User Registration with validation
✅ JWT-based authentication
✅ Password hashing with bcryptjs
✅ Protected routes
✅ Session persistence (localStorage)
✅ Error handling
✅ Responsive UI with Tailwind CSS
✅ Form validation
✅ Auto-logout on token expiration

## Frontend Components

### AuthContext
Manages global authentication state and provides methods for signup, signin, and logout.

### PrivateRoute
Protects routes that require authentication.

### Navbar
Displays navigation with auth-dependent controls (Sign In/Sign Up for guests, Logout for logged-in users).

### Form Pages
Signup and Signin pages with form validation and error handling.

## Security Features

- Passwords are hashed with bcryptjs before storage
- JWT tokens for secure authentication
- Protected routes that require valid tokens
- CORS enabled for secure cross-origin requests
- Password confirmation on signup
- Email validation

## Dependencies Installed

### Server
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT token generation and verification
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin request handler
- `dotenv` - Environment variables

### Client
- `axios` - HTTP client
- `react-router-dom` - Client-side routing
- `react` - UI library
- `react-dom` - React DOM rendering

## Usage Examples

### Signup
1. Navigate to `/signup`
2. Fill in username, email, password, and confirm password
3. Click "Sign Up"
4. User is automatically logged in and redirected to home

### Signin
1. Navigate to `/signin`
2. Enter email and password
3. Click "Sign In"
4. User is logged in and redirected to home

### Logout
1. Click "Logout" button in the navbar
2. User is logged out and redirected to signin page

## Notes

- Tokens are stored in localStorage and persist across browser sessions
- The JWT token expires in 7 days
- Protected routes redirect to signin if user is not authenticated
- Form validation happens on both client and server side
