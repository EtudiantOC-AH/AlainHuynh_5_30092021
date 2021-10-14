let params = new URL(location).searchParams;
const id = params.get("id");

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

const ajoutPanier = document.getElementById('addToCart');    // On récupère l'élément sur lequel on veut détecter le clic
ajoutPanier.addEventListener('click', (event) => {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris

    let quantity = document.getElementById('quantity').value; //<input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
    let color = document.getElementById('colors').value; //<select name="color-select" id="colors">

    let productAdded = [{'idChosen': id, 'quantityChosen': quantity, 'colorChosen': color }]; // Récupérer les données dans un tableau
        //console.log(productAdded);

    //convertir le tableau en json et en chaine de caractères
    let productAddedJSON = JSON.stringify(productAdded);

    //local storage stockage
    localStorage.setItem('monPanier', productAddedJSON);
    alert('Vos articles ont été ajoutés au panier');
    document.location = 'cart.html';
}); 
/*Lorsqu’on ajoute un produit au panier, si celui-ci n'était pas déjà présent dans le panier, 
    on ajoute un nouvel élément dans l’array.*/

    /*Lorsqu’on ajoute un produit au panier, si celui-ci était déjà présent
dans le panier (même id + même couleur), on incrémente
simplement la quantité du produit correspondant dans l’array.
if () {
    
} else {

};*/



