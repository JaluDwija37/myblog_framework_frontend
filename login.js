document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');


    fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            if (data.access) {
                localStorage.setItem('accessToken', data.access)
                messageDiv.textContent = 'Login Successfully';
                messageDiv.style.color = 'green'
            }
        })
        .catch(error => {
            console.error('Error', error);
            messageDiv.textContent = 'Login failed';
            messageDiv.style.color = 'red'
        })
})