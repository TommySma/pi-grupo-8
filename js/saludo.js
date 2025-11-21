document.addEventListener("DOMContentLoaded", function () {

    let usuario = localStorage.getItem("usuario");

    if (!usuario) return;

    let btnLogin = document.querySelector("#botonLogin");
    let btnRegist = document.querySelector("#botonRegist");
    let lista2 = document.querySelector("#lista2")

    if (btnLogin){
        lista2.innerHTML = `<li style="margin-right: 10px;"> Bienvenido: ${usuario} </li>`
    } 
    if (btnRegist){
        lista2.innerHTML += `<li style="margin-right: 10px;">  <a href="#" id="logout">Logout</a> </li>`

    } 

    
});