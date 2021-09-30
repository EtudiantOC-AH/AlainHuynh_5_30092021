let params = new URL(document, location).searchParams;
let id = params.get("id");

fetch('http://localhost:3000/api/products/${_id}')
    .then((response) => response.json())
    .then(productId => {
        console.log(productId);
    document.getElementsByClassName("item__img").innerHTML += '<img src="${productId.imageUrl}" alt="${productId.altTxt}"></img>';
    document.getElementById("title").textContent += '${productId.name}';
    document.getElementById("price").textContent += '${productId.price}';
    document.getElementById('description').textContent += '${productId.description}';
    document.getElementsByTagName('option').innerHTML+= '<option value="${colors}"</option>';
    })
    .catch((error) => {
        let messageError = document.querySelector("item");
        messageError.innerHTML = "Une erreur est survenue...";
    })
