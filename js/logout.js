document.addEventListener("DOMContentLoaded", function () {

    let btnLogout = document.querySelector("#logout");

    if (!btnLogout){
        return;
    } 

    btnLogout.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("usuario");

        let divSaludo = document.querySelector("#saludoUsuario");
        if (divSaludo) {
            divSaludo.innerHTML = "";
        }

        let btnLogin = document.querySelector("#botonLogin");
        let btnRegist = document.querySelector("#botonRegist");

        if (btnLogin){
            btnLogin.style.display = "";
        } 
        if (btnRegist){
            btnRegist.style.display = "";
        }
    });
});