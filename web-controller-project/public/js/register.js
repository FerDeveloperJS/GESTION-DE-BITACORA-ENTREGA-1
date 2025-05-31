document.getElementById('register-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contrasena = document.getElementById('password').value.trim();

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, contrasena })
    });

    const data = await response.json();
    const messageDiv = document.getElementById('message');
    if (response.ok) {
        messageDiv.textContent = data.message;
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = data.message;
        messageDiv.style.color = 'red';
    }
});