document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("login-form");

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const contrasena = document.getElementById("password").value.trim();

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, contrasena })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed. Please check your credentials.');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful login
            alert("Login successful!");
            window.location.href = "bitacora.html"; // Redirect to bitacora page
        })
        .catch(error => {
            alert(error.message);
        });
    });
});