// Login Page Logic

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Social login buttons
    const googleLogin = document.getElementById('googleLogin');
    const githubLogin = document.getElementById('githubLogin');

    if (googleLogin) {
        googleLogin.addEventListener('click', () => handleSocialLogin('google'));
    }
    if (githubLogin) {
        githubLogin.addEventListener('click', () => handleSocialLogin('github'));
    }
});

// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;

    // Clear previous errors
    clearErrors();

    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }

    try {
        // Call login API
        const response = await API.user.login(email, password);
        
        // Store user session
        const user = {
            id: response.id,
            email: response.email,
            name: response.name,
            role: response.role,
            token: response.token
        };

        if (remember) {
            localStorage.setItem('rememberMe', 'true');
        }

        SessionManager.setSession(user);

        // Redirect based on role
        if (response.role === 'founder') {
            window.location.href = 'founder-dashboard.html';
        } else if (response.role === 'investor') {
            window.location.href = 'investor-dashboard.html';
        }
    } catch (error) {
        console.error('Login error:', error);
        Utils.showNotification('Login failed. Please check your credentials.', 'error');
        document.getElementById('emailError').textContent = 'Invalid email or password';
    }
}

// Validate login form
function validateLoginForm(email, password) {
    let isValid = true;

    if (!Utils.isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    return isValid;
}

// Handle social login
function handleSocialLogin(provider) {
    Utils.showNotification(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login coming soon!`, 'info');
    // Integration with OAuth providers will be implemented later
}

// Clear error messages
function clearErrors() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

// Check if user is already logged in
window.addEventListener('load', () => {
    if (SessionManager.isLoggedIn()) {
        const user = SessionManager.getSession();
        if (user.role === 'founder') {
            window.location.href = 'founder-dashboard.html';
        } else if (user.role === 'investor') {
            window.location.href = 'investor-dashboard.html';
        }
    }
});
