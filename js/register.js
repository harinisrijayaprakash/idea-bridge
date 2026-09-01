// Registration Page Logic

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Social signup buttons
    const googleSignup = document.getElementById('googleSignup');
    const githubSignup = document.getElementById('githubSignup');

    if (googleSignup) {
        googleSignup.addEventListener('click', () => handleSocialSignup('google'));
    }
    if (githubSignup) {
        githubSignup.addEventListener('click', () => handleSocialSignup('github'));
    }
});

// Handle registration form submission
async function handleRegister(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;
    const termsAccepted = document.querySelector('input[name="terms"]').checked;

    // Clear previous errors
    clearErrors();

    // Validate form
    if (!validateRegistrationForm(fullname, email, password, confirmPassword, role, termsAccepted)) {
        return;
    }

    try {
        // Call registration API
        const response = await API.user.register({
            name: fullname,
            email: email,
            password: password,
            role: role
        });
        
        // Store user session
        const user = {
            id: response.id,
            email: response.email,
            name: response.name,
            role: response.role,
            token: response.token
        };

        SessionManager.setSession(user);

        Utils.showNotification('Account created successfully!', 'success');

        // Redirect based on role
        setTimeout(() => {
            if (response.role === 'founder') {
                window.location.href = 'founder-dashboard.html';
            } else if (response.role === 'investor') {
                window.location.href = 'investor-dashboard.html';
            }
        }, 1500);
    } catch (error) {
        console.error('Registration error:', error);
        Utils.showNotification('Registration failed. Please try again.', 'error');
    }
}

// Validate registration form
function validateRegistrationForm(fullname, email, password, confirmPassword, role, termsAccepted) {
    let isValid = true;

    if (fullname.trim().length < 3) {
        document.getElementById('fullnameError').textContent = 'Full name must be at least 3 characters';
        isValid = false;
    }

    if (!Utils.isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (!role) {
        document.getElementById('roleError').textContent = 'Please select your role';
        isValid = false;
    }

    if (!termsAccepted) {
        Utils.showNotification('Please accept the terms and conditions', 'error');
        isValid = false;
    }

    return isValid;
}

// Handle social signup
function handleSocialSignup(provider) {
    Utils.showNotification(`${provider.charAt(0).toUpperCase() + provider.slice(1)} signup coming soon!`, 'info');
    // Integration with OAuth providers will be implemented later
}

// Clear error messages
function clearErrors() {
    document.getElementById('fullnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('roleError').textContent = '';
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
