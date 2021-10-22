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

const ajoutPanier = document.getElementById('addToCart');    // Récupère l'élément sur lequel on veut détecter le clic
ajoutPanier.addEventListener('click', (event) => {     // Ecouter l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();         // Utiliser la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris

    let quantity = document.getElementById('quantity').value; 
    let color = document.getElementById('colors').value; 
    let name = document.getElementById('title');
    let image = document.querySelector('.item__img');
    let price = document.getElementById('price');

    let productAdded = [{'idChosen': id, 'quantityChosen': quantity, 'colorChosen': color, 'titleChosen': name, 'imgChosen': image, 'priceChosen': price }]; // Récupérer les données dans un tableau
        //console.log(productAdded);
        let panier = addPanier(productAdded)
    //convertir le tableau en json et en chaine de caractères
    let productAddedJSON = JSON.stringify(productAdded);
    //local storage stockage
    localStorage.setItem('monPanier', productAddedJSON);
}); 

function addPanier(productAdded) {
    let monPanier = localStorage.getItem("monPanier");
    if (monPanier != null)  {
        let monPanierJSON = JSON.parse(monPanier);
        monPanierJSON.forEach(product => {
            //console.log(product)
            if (product.idChosen == productAdded.idChosen & product.colorChosen == productAdded.colorChosen) {
                product.quantityChosen++
            } else {
                (product.idChosen != productAdded.idChosen); 
                productAdded.push(monPanier)
            }
        })
    }
            localStorage.setItem('monPanier', productAdded);
            alert('Vos articles ont été ajoutés au panier');
            document.location = 'cart.html';
};

addPanier();






