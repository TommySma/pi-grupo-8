document.addEventListener("DOMContentLoaded", function () {

    let usuario = localStorage.getItem("usuario");

    if (!usuario) return;

    let btnLogin = document.querySelector("#botonLogin");
    let btnRegist = document.querySelector("#botonRegist");
    let divSaludo = document.querySelector("#saludoUsuario");

    if (btnLogin){
        btnLogin.style.display = "none";
    } 
    if (btnRegist){
        btnRegist.style.display = "none";
    } 

    if (divSaludo) {
        divSaludo.innerHTML = `<span style="margin-right: 10px;">Bienvenido: ${usuario}</span> <a href="#" id="logout">Logout</a>`;
    } 
});