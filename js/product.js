fetch('https://dummyjson.com/products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //data
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    for (let i = 0; i < data.products.length; i++) {
      const p = data.products[i];

      if (p.id == id) {
        document.querySelector("#fotoProduct").innerHTML = `<img src="${p.images[0]}" alt="${p.title}">`;
        document.querySelector("#tituloProduct").innerHTML = `${p.title} <br> (${p.brand})`;
        document.querySelector("#precioProduct").innerHTML = `$${p.price}`;
        document.querySelector("#descripcion").innerHTML = `${p.description}`;
        document.querySelector("#datosProduct").innerHTML += `
          <p class="datos">Categoria:<a href="./category.html?category=${p.category}"> ${p.category.toUpperCase()}</a></p>`;

        const cantidad = document.querySelector("#cantidad");
        cantidad.placeholder = `Stock disponible: ${p.stock}`;
        cantidad.max = p.stock
        cantidad.min = 1

        let boton = document.querySelector("#btnCompra")
        boton.addEventListener('click', function (e) {
          if (Number(cantidad.value) < 1) {
            e.preventDefault();
            document.querySelector("#label").style.color = "red"
            document.querySelector("#label").innerHTML = "Falta seleccionar cantidad"
          }
        })

        for (let j = 0; j < p.tags.length; j++) {
          if (p.tags[j]) {
            document.querySelector("#datosProduct").innerHTML += `<p class="tags">#${p.tags[j]}</p>`;
          }
        }

        document.querySelector("#rating").innerHTML = `${p.rating}<img src ="./img/estrella.png" alt ="estrella"> `;

        for (let ii = 0; ii < p.reviews.length; ii++) {
          let fecha = ''

          for (let jj = 0; jj < 10; jj++) {
            fecha += `${p.reviews[ii].date[jj]}`
          }
          document.querySelector("#comment").innerHTML += `<li> ${p.reviews[ii].rating} <img src ="./img/estrella.png" alt ="estrella"> ${p.reviews[ii].comment} ${fecha}</li> `;
        }
      }
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });


