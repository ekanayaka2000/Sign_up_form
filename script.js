document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    signupBtn.addEventListener('click', () => {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Basic form validation
    document.getElementById('signupForm').addEventListener('submit', (event) => {
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            event.preventDefault();
        }
    });

    // Social sign-in (these should be handled by their respective APIs)
    document.getElementById('googleSignin').addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/signin'; // Replace with actual Google OAuth URL
    });

    document.getElementById('facebookSignin').addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth'; // Replace with actual Facebook OAuth URL
    });

    document.getElementById('twitterSignin').addEventListener('click', () => {
        window.location.href = 'https://api.twitter.com/oauth/authenticate'; // Replace with actual Twitter OAuth URL
    });

    document.getElementById('googleSignup').addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/signup'; // Replace with actual Google OAuth URL
    });

    document.getElementById('facebookSignup').addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth'; // Replace with actual Facebook OAuth URL
    });

    document.getElementById('twitterSignup').addEventListener('click', () => {
        window.location.href = 'https://api.twitter.com/oauth/authenticate'; // Replace with actual Twitter OAuth URL
    });
});
