let params = new URL(location).searchParams;
let id = params.get("id");

fetch('http://localhost:3000/api/products/' + id)
    .then((response) => response.json())
    .then(product => {
        //console.log(product);
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

const ajoutPanier = document.getElementById('addToCart');    // On récupère l'élément sur lequel on veut détecter le clic
ajoutPanier.addEventListener('click', (event) => {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris

    const idChosen = ("id"); //id du produit choisi
    const quantityChosen = document.getElementsByTagName("label, itemQuantity"); //<label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
    const colorChosen = value.getAttribute(color); //<option value="${color}">${color}</option>
    let productAdded = ['idChosen', 'quantityChosen', 'colorChosen']; // Récupérer les données dans un tableau
      console.log(productAdded);
});

//convertir le tableau en json
let getPanier = JSON.stringify("productAdded");
//local storage stockage
localStorage.setItem("productAdded");



