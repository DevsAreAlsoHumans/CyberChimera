var name;
if (localStorage.getItem("name")!=""){
    fetch('http://localhost:3000/recup_compte', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:localStorage.getItem("name")}),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            var email = data[0].email;
            document.getElementById("name").textContent = document.getElementById("name").textContent + data[0].pseudo;
            document.getElementById("login__title").textContent = document.getElementById("login__title").textContent + data[0].pseudo
            document.getElementById("email").textContent = document.getElementById("email").textContent + data[0].email;

        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

document.getElementById("logout").addEventListener("submit", (event)=>{
    event.preventDefault();
    localStorage.setItem("name","")
    window.location.href= "acceuil";
acceuil})

