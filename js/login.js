document.addEventListener("DOMContentLoaded", function () {
    alert("Login.js se cargó correctamente"); 

    let form = document.querySelector("#formLogin");
    let email = document.querySelector("#emailLogin");
    let password = document.querySelector("#passwordLogin");

    let e_email = document.querySelector(".invalid-feedback.email")
    let e_pass = document.querySelector(".invalid-feedback.password")
  
    form.addEventListener("submit", function (e) { 

        let errors = false;
        if (email.value === "") {
            email.style.color = "red"
            e_email.innerText = "El email es obligatorio."
            e_email.style.display = "block"
            e.preventDefault();
            errors = true;
        }
        else{
            email.style.color = "green"
            e_email.style.display = "none"
        }


        if (password.value === "") {
            password.style.color = "red"
            e_pass.innerText = "La contraseña es obligatoria."
            e_pass.style.display = "block"
            e.preventDefault();
            errors = true;
        }
        else{
            password.style.color = "green"
            e_pass.style.display = "none"
        }

        if (password.value.length < 6) {
            password.style.color = "red"
            e_pass.innerText = "La contraseña debe tener al menos 6 caracteres."
            e_pass.style.display = "block"
            e.preventDefault();
            errors = true;
        }
        else{
            password.style.color = "green"
            e_pass.style.display = "none"
        }

        if (errors) {
            e.preventDefault();
            return;
        }

        localStorage.setItem("usuario", email.value);
        window.location.href = "index.html";
    });
});
