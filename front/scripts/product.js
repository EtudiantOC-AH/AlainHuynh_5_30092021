let params = new URL(location).searchParams;
let id = params.get("id");

fetch('http://localhost:3000/api/products/' + id)
    .then((response) => response.json())
    .then(product => {
        console.log(product);
    document.querySelector('.item__img').innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    document.getElementById("title").textContent += product.name;
    document.getElementById("price").textContent += product.price;
    document.getElementById('description').textContent += product.description;
    product.colors.forEach(color => {
    document.getElementById('colors').innerHTML += `<option value="${color}">${color}</option>`
      })
    })
    .catch((error) => {
        let messageError = document.querySelector(".item");
        messageError.innerHTML = "Une erreur est survenue...";
    })
