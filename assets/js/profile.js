document.getElementById("name").textContent = document.getElementById("name").textContent + localStorage.getItem("name");
document.getElementById("login__title").textContent = document.getElementById("login__title").textContent + localStorage.getItem("name")
document.getElementById("logout").addEventListener("submit", (event)=>{
    event.preventDefault();
    localStorage.setItem("name","")
    window.location.href= "acceuil";
acceuil})