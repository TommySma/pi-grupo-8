fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const best = document.querySelector("#bestSeller");
        const recom = document.querySelector("#Recomendados")

        let htmlBest = "";
        let htmlRecom = ""
        for (let i = 0; i < data.products.length; i++) {
            const p = data.products[i];

            if (p.category === "beauty" || p.category === "fragrances") {
                htmlBest += `
                <article class = "card">
                <img src="${p.images[0]}" alt="${p.title}">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <p>$${p.price}</p>
                <a href="./product.html?id=${p.id}" class="bt-mas">VER MÁS</a>
                </article>`;

                htmlRecom += `
                <article class = "card">
                <img src="${p.images[0]}" alt="${p.title}">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <p>$${p.price}</p>
                <a href="./product.html?id=${p.id}" class="bt-mas">VER MÁS</a>
                </article>`;
            }

        }
        best.innerHTML += htmlBest;
        recom.innerHTML += htmlRecom;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
