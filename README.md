# Coinco Application

A modern, responsive web application with user authentication system built using HTML, CSS, and JavaScript. The application features a beautiful glassmorphism design with user registration, login, and a protected homepage.

## Features

- **User Registration**: Create new accounts with email and username validation
- **User Authentication**: Secure login system with credential validation
- **Remember Me**: Optional persistent login functionality
- **Protected Routes**: Homepage accessible only to authenticated users
- **Responsive Design**: Modern glassmorphism UI that works on all devices
- **Local Storage**: Client-side data persistence for user accounts
- **Form Validation**: Comprehensive input validation and error handling

## How to Run the Application

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation & Setup

1. **Download/Clone the project files**
   ```bash
   git clone https://github.com/Oswald4422/GitPlus.git

   cd GitPlus-Trial
   ```

2. **Create the images folder** (if not present)
   ```bash
   mkdir images
   ```

3. **Add image assets** to the `images/` folder:
   - `even1.avif`
   - `even2.avif` 
   - `even3.avif`

4. **Open the application**
   - Double-click on `signin.html` to open in your default browser
   - Or right-click → "Open with" → select your preferred browser
   - Or serve via a local server (optional but recommended for development)

### Running with Local Server (Optional)

For development purposes, you can run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/signin.html`

## Application Flow

### 1. Sign In Page (`signin.html`)
- **Entry Point**: Main landing page of the application
- **Features**:
  - Username and password input fields
  - "Remember Me" checkbox for persistent login
  - "Forgot Password" link (shows alert)
  - Tab navigation to Sign Up page
  - Form validation and authentication

### 2. Sign Up Page (`signup.html`)
- **Registration**: New user account creation
- **Features**:
  - Email, username, password, and confirm password fields
  - Terms & Conditions acceptance checkbox
  - Password matching validation
  - Duplicate user detection
  - Automatic login after successful registration

### 3. Homepage (`homepage.html`)
- **Protected Route**: Only accessible to authenticated users
- **Features**:
  - Modern crypto-themed landing page
  - Navigation menu with placeholder links
  - User session management
  - Responsive design with floating elements

## Technical Implementation

### Authentication System

The application uses **localStorage** for client-side data persistence:

```javascript
// User data structure
{
  email: "user@example.com",
  username: "username",
  password: "password",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

### Data Storage

- **`users`**: Array of all registered users
- **`currentUser`**: Currently logged-in user object
- **`rememberMe`**: Boolean flag for persistent login

### Key Functions

- **`saveUser(userData)`**: Saves new user to localStorage
- **`validateUser(username, password)`**: Validates login credentials
- **`checkAuth()`**: Checks if user is currently authenticated
- **`navigateTo(page)`**: Handles page navigation
- **`initializePage()`**: Initializes page-specific functionality

## Design Features

### Glassmorphism UI
- Semi-transparent containers with backdrop blur
- Colorful gradient backgrounds
- Smooth animations and hover effects
- Modern card-based layouts

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## Security Considerations

**Important**: This application is designed for **demonstration purposes only**. For production use, implement proper security measures:

- **Password Hashing**: Currently stores plain text passwords
- **HTTPS**: Use encrypted connections
- **Server-side Validation**: Add backend authentication
- **Session Management**: Implement proper session handling
- **Input Sanitization**: Add XSS protection

## Troubleshooting

### Common Issues

1. **"Please sign in to access this page"**
   - Solution: Navigate to `signin.html` and log in with valid credentials

2. **"Username or email already exists"**
   - Solution: Use different credentials or clear localStorage

3. **Images not loading**
   - Solution: Ensure image files are in the `images/` folder

4. **LocalStorage not working**
   - Solution: Ensure you're not in private/incognito mode

### Clear Application Data

To reset the application (clear all users):
```javascript
// Run in browser console
localStorage.clear();
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Future Enhancements

- [ ] Password strength validation
- [ ] Email verification
- [ ] Profile management
- [ ] Password reset functionality
- [ ] Backend integration
- [ ] Database storage
- [ ] OAuth integration
- [ ] Multi-factor authentication

---
