fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        let buscar = document.querySelector("#input-buscador");
        let form = document.querySelector("#form-buscador");
        let label = document.querySelector("#buscadorLabel")
        let categorias = document.querySelector("#lista1")
        let cate =[]

        for( let i=0; i<data.products.length; i++){
            const p = data.products[i];
            
            if (!cate.includes(p.category)){
            categorias.innerHTML +=`<li><a href="./category.html?category=${p.category}">${p.category.toUpperCase()}</a></li>`
            cate.push(p.category)
        }  
        }

        

        form.addEventListener("submit", function (e) {
            if (buscar.value.length <3 ){
                label.innerHTML = `<label>Debes escribir al menos 3 caracteres</label>`
                label.style.color ="red"
                e.preventDefault()
            }
        });
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });



