document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;

    // Here, you can implement the login logic, like sending a request to a server
    // For this example, let's just validate the username and password
    if (username === 'user') {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').innerText = 'Invalid username';
    }
});
