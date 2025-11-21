fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const params = new URLSearchParams(window.location.search);
        const terminoOriginal = params.get("buscador") || "";
        const termino = terminoOriginal.toLowerCase().trim();

        const contenedor = document.querySelector("#bestSeller");
        let html = "";

        html += `<h1 id="titBestseller">Resultados de búsqueda para: "${terminoOriginal}"</h1>`;

        let resultados = [];

        for (let i = 0; i < data.products.length; i++) {
            let p = data.products[i];
            let titulo = p.title.toLowerCase();

            let coincide = true;

            for (let j = 0; j < termino.length; j++) {
                if (termino[j] !== titulo[j]) {
                    coincide = false;
                    break;
                }
            }

            if (coincide && termino.length > 0) {
                resultados.push(p);
            }
        }

        if (resultados.length === 0) {
            html += `<h1 id="noresults">No se han encontrado resultados para: "${terminoOriginal}"</h1>`;
            contenedor.innerHTML = html;
            return;
        }

        for (let i = 0; i < resultados.length; i++) {
            const p = resultados[i];

            html += `<article class="card"> <img src="${p.images[0]}" alt="${p.title}"> <h2>${p.title}</h2> <p>${p.description}</p> <p>$${p.price}</p> <a href="./product.html?id=${p.id}" class="bt-mas">VER MÁS</a> </article>`;
        }

        contenedor.innerHTML = html;

    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
