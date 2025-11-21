document.addEventListener("DOMContentLoaded", function () {

    let btnLogout = document.querySelector("#logout");

    if (!btnLogout){
        return;
    } 

    btnLogout.addEventListener("click", function (e) {
    
        localStorage.removeItem("usuario");

        let lista2 = document.querySelector("#lista2")        
        
        
        lista2.innerHTML = `<li><a href="./login.html" id="botonLogin">LOG IN</a></li>`
        let btnLogin = document.querySelector("#botonLogin");
        btnLogin.style.display = "";

        
        
        lista2.innerHTML += `<li><a href="./register.html" id="botonRegist">REGISTRO</a></li>`
        let btnRegist = document.querySelector("#botonRegist");
        btnRegist.style.display = "";
    });
});