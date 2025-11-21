document.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector("#main-forms form");
    let email = form.querySelector('#emailRegis');
    let password = form.querySelector('#passRegis');
    let repassword = form.querySelector('#rePassRegis');
    let tYc = form.querySelector('#tyc');

    let e_email = document.querySelector(".invalid-feedback.email")
    let e_pass = document.querySelector(".invalid-feedback.password")
    let e_repass = document.querySelector(".invalid-feedback.re-password")
    let e_tyc = document.querySelector(".invalid-feedback.tyc")

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
        else if (password.value.length < 6) {
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

        if (repassword.value === "") {
            repassword.style.color = "red"
            e_repass.innerText = "Confirmar la contraseña es obligatorio."
            e_repass.style.display = "block"
            e.preventDefault();
            errors = true;
        }

        else if (password.value !== repassword.value) {
            repassword.style.color = "red"
            e_repass.innerText = "Las contraseñas no coinciden."
            e_repass.style.display = "block"
            e.preventDefault();
            errors = true;
        }
        else{
            repassword.style.color = "green"
            e_repass.style.display = "none"
        }

        if (!tYc.checked) {
            tYc.style.color = "red"
            e_tyc.innerText = "Debe aceptar los TyC"
            e_tyc.style.display = "block"
            e.preventDefault();
            errors = true;
        }
        else{
            tYc.style.color = "green"
            e_tyc.style.display = "none"
        }

        if (errors) {
            e.preventDefault();
            return;
        }



    });
});
