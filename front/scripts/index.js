fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then(products => {
        console.log(products);
        let productsHTML = ""
        products.forEach(product => {
            productsHTML += `
            <a href="./product.html?id=${product._id}">
            <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}">
            <h3 class="productName"> ${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            </article>
          </a>
        `
        })
        document.getElementById('items').innerHTML = productsHTML
    })
    .catch((error) => {
        let messageError = document.querySelector(".items");
        messageError.innerHTML = "Une erreur est survenue...";
    })
