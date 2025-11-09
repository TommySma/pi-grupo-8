fetch('https://dummyjson.com/products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
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
          <p class="datos">Categoria:<a href="./men-category.html"> ${p.category.toUpperCase()}</a></p>
          <p class="datos">Stock: ${p.stock} unidades</p>
        `;

        for (let j = 0; j < p.tags.length; j++) {  
          if (p.tags[j]) {
            document.querySelector("#datosProduct").innerHTML += `<p class="tags">#${p.tags[j]}</p>`;
          }
        }

        document.querySelector("#rating").innerHTML = `${p.rating}          <img src ="./img/estrella.png" alt ="estrella"> `;

        if (p.reviews) {
          for(let ii = 0; ii < p.reviews.length; ii++){
            document.querySelector("#comment").innerHTML += 
              `${p.reviews[ii].rating} <img src ="./img/estrella.png" alt ="estrella"> ${p.reviews[ii].comment} ${p.reviews[ii].date}<br>`;
          }
        }
      }
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

       
