document.getElementById("login__form").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("pass").value;

    fetch('http://localhost:3000/connexion_compte', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.success == false){
            }else{
                localStorage.setItem("name", data[0].pseudo);

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
