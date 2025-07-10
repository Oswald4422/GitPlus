// showing alerts and handling user authentication
function showAlert(message) {
    alert(message);
}

// Check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
}

// Save user to localStorage
function saveUser(userData) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

// Validate user credentials
function validateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(user => user.username === username && user.password === password);
}

// Handle page navigation
function navigateTo(page) {
    window.location.href = page;
}

// Initialize page based on current location
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
        case 'index.html':
            initializeSignIn();
            break;
        case 'signup.html':
            initializeSignUp();
            break;
        case 'homepage.html':
            initializeHomepage();
            break;
    }
}

// Sign In Page Initialization
function initializeSignIn() {
    const signinForm = document.getElementById('signinForm');
    const signupTab = document.getElementById('signupTab');
    const signupLink = document.getElementById('signupLink');
    
    // Handle sign in form submission
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Validate input
            if (!username || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Check if user exists
            const user = validateUser(username, password);
            if (user) {
                // Set current user in localStorage
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Set remember me preference
                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }
                
                alert('Sign in successful!');
                navigateTo('homepage.html');
            } else {
                alert('Invalid username or password');
            }
        });
    }
    
    // Handle tab navigation
    if (signupTab) {
        signupTab.addEventListener('click', function() {
            navigateTo('signup.html');
        });
    }
    
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo('signup.html');
        });
    }
}

// Sign Up Page Initialization
function initializeSignUp() {
    const signupForm = document.getElementById('signupForm');
    const signinTab = document.getElementById('signinTab');
    
    // Handle sign up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const acceptTerms = document.getElementById('acceptTerms').checked;
            
            // Validate input
            if (!email || !username || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!acceptTerms) {
                alert('Please accept the Terms & Conditions');
                return;
            }
            
            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const existingUser = users.find(user => user.username === username || user.email === email);
            
            if (existingUser) {
                alert('Username or email already exists');
                return;
            }
            
            // Create new user
            const newUser = {
                email: email,
                username: username,
                password: password,
                createdAt: new Date().toISOString()
            };
            
            // Save user
            saveUser(newUser);
            
            // Set current user
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            alert('Account created successfully!');
            navigateTo('homepage.html');
        });
    }
    
    // Handle tab navigation
    if (signinTab) {
        signinTab.addEventListener('click', function() {
            navigateTo('index.html');
        });
    }
}

// Homepage Initialization
function initializeHomepage() {
    // Check if user is authenticated
    if (!checkAuth()) {
        alert('Please sign in to access this page');
        navigateTo('index.html');
        return;
    }
    
    // Welcome message
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Welcome, ' + currentUser.username + '!');
    
    // Add logout functionality (you can add a logout button to the homepage)
    window.logout = function() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberMe');
        alert('You have been logged out');
        navigateTo('index.html');
    };
}

// Auto-login if remember me is checked
function autoLogin() {
    const rememberMe = localStorage.getItem('rememberMe');
    const currentUser = localStorage.getItem('currentUser');
    
    if (rememberMe === 'true' && currentUser) {
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'index.html' || currentPage === '' || currentPage === 'index.html') {
            navigateTo('homepage.html');
        }
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    autoLogin();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    initializePage();
});