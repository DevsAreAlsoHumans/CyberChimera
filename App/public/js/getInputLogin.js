document.getElementById("login__form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("aaaaa")
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
                console.log('mauvais');
                document.getElementById('errorMessage').textContent = 'Mauvais identifiant ou mot de passe';
            }else{
                localStorage.setItem("name", data[0].email);
                window.location.href= "profil";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
