
if (localStorage.getItem("name")!= ""){
    document.getElementById("profil").style.display = "flex"
 }else{
    document.getElementById("profil").style.display = "none"
 }

if (localStorage.getItem("name")!= ""){
   document.getElementById("game").style.display = "flex"
}else{
   document.getElementById("game").style.display = "none"
}

if (localStorage.getItem("name")!= ""){
   document.getElementById("game2").style.display = "flex"
}else{
   document.getElementById("game2").style.display = "none"
}
 