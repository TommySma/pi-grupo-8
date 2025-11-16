fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let buscar = document.querySelector("#input-buscador");
        let form = document.querySelector("#form-buscador");
    

        form.addEventListener("submit", function (e) {

            let texto = buscar.value.toLowerCase();
            let lista = "";

            for (let i = 0; i < data.products.length; i++) {
                let p = data.products[i];
                let titulo = p.title.toLowerCase();

                let coincide = true;

                // comparar letra por letra
                for (let j = 0; j < texto.length; j++) {
                    if (texto[j] !== titulo[j]) {
                        coincide = false;
                        break;
                    }
                }

                if (coincide && texto.length > 0 && (p.category === "fragrances" || p.category === "beauty")){
                    lista += `${p.title} \n`;
                }
            }

            if (lista === "") {
                e.preventDefault();
                alert("No se encontró ningún producto");
            } else {
                alert(`Productos encontrados:\n${lista}`);
                let listaString = JSON.stringify(lista)
                sessionStorage.setItem("listaBusqueda",listaString)
            }
        });
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });



