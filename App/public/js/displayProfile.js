
if (localStorage.getItem("name")== "" || localStorage.getItem("name") == null){
   document.getElementById("profil").style.display = "none"
 }else{
   document.getElementById("profil").style.display = "flex"
 }

if (localStorage.getItem("name")== "" || localStorage.getItem("name") == null){
   document.getElementById("interface").style.display = "none"
}else{
   document.getElementById("interface").style.display = "flex"
}
 