document.getElementById("register__form").addEventListener("submit", function (event) {
    event.preventDefault();

    var pseudo = document.getElementById("register-pseudo").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-pass").value;

    fetch('http://localhost:3000/ajout_compte', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudo, email, password }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
