fetch('https://dummyjson.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let busquedaString = sessionStorage.getItem("listaBusqueda")
        let busqueda = JSON.parse(busquedaString)

        document.querySelector("#titBestseller").innerHTML = `hola,${busqueda}`

    })
    .catch(function (error) {
        console.log("Error: " + error);
    }); 