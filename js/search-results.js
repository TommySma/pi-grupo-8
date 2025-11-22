fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const params = new URLSearchParams(window.location.search);
        const terminoOriginal = params.get("buscador");
        const termino = terminoOriginal.toLowerCase().trim();

        const contenedor = document.querySelector("#bestSeller");
        let html = `<h1 id="titBestseller">Resultados de búsqueda para: "${terminoOriginal}"</h1>`;

        let resultados = [];

        for (let i = 0; i < data.products.length; i++) {
            const p = data.products[i];
            let titulo = p.title.toLowerCase();
            let category = p.category.toLowerCase()

            let coincide = true;

            for (let j = 0; j < termino.length; j++) {
                if (termino[j] !== titulo[j] && termino[j] !== category[j] ) {
                    coincide = false;
                    break;
                }
            }

            if (coincide && termino.length > 0) {
                resultados.push(p);
            }
        }

        if (resultados.length === 0) {

    html = `<h1 id="titBestseller">No se han encontrado resultados para: "${terminoOriginal}"</h1>
        <h2 id ="Recomendados">Recomendados</h2>`;

    let cate = [];

    for (let i = 0; i < data.products.length; i++) {
        let p = data.products[i];

        if (!cate.includes(p.category)) {

            html += `<article class="card">
                        <img src="${p.images[0]}" alt="${p.title}">
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <p>$${p.price}</p>
                        <a href="./product.html?id=${p.id}" class="bt-mas">VER MÁS</a>
                     </article>`;

            cate.push(p.category);
        }
    }

    contenedor.innerHTML = html;
    return;
}

        for (let i = 0; i < resultados.length; i++) {
            const p = resultados[i];

            html += `<article class="card"> 
            <img src="${p.images[0]}" alt="${p.title}"> 
            <h2>${p.title}</h2> 
            <p>${p.description}</p> 
            <p>$${p.price}</p> 
            <a href="./product.html?id=${p.id}" class="bt-mas">VER MÁS</a> 
            </article>`;
        }

        contenedor.innerHTML = html;

    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
