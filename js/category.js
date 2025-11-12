fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category");
        console.log(data);

        document.querySelector("#titBestseller").innerHTML = `${category.toUpperCase()} - BEST SELLERS`

        const best = document.querySelector("#bestSeller");
        let htmlBest = "";

        for (let i = 0; i < data.products.length; i++) {
            const p = data.products[i];

            if (p.category === category) {
                htmlBest += `
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

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
