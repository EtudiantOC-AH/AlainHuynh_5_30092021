let params = new URL(location).searchParams;
const id = params.get("id");
showProduct(id)

async function showProduct(id) {
    let product = await getProduct(id)
console.log(product)

    document.querySelector('.item__img').innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    document.getElementById("title").textContent += product.name;
    document.getElementById("price").textContent += product.price;
    document.getElementById('description').textContent += product.description;
    product.colors.forEach(color => {
        document.getElementById('colors').innerHTML += `<option value="${color}">${color}</option>`
    })
}


const ajoutPanier = document.getElementById('addToCart');    // Récupère l'élément sur lequel on veut détecter le clic
ajoutPanier.addEventListener('click', (event) => {     // Ecouter l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();         // Utiliser la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris

    let quantity = document.getElementById('quantity').value; 
    let color = document.getElementById('colors').value; 

    let productAdded = {'idChosen': id, 'quantityChosen': quantity, 'colorChosen': color}; // Récupérer les données dans un objet

    addPanier(productAdded)

}); 

function addPanier(productAdded) {
    let monPanierJSON = localStorage.getItem("monPanier");
    if (monPanierJSON != null)  {
        let monPanier = JSON.parse(monPanierJSON);
        let isNew = true;
        monPanier.forEach(product => {
            //console.log(product)
            if (product.idChosen == productAdded.idChosen && product.colorChosen == productAdded.colorChosen) {
                product.quantityChosen = parseInt(product.quantityChosen) + parseInt(productAdded.quantityChosen)
                isNew = false
            }
        })
        if (isNew) {
            monPanier.push(productAdded)
        }
        localStorage.setItem('monPanier', JSON.stringify(monPanier));
        alert('Vos articles ont été ajoutés au panier');
        document.location = 'cart.html';
    } else {
        localStorage.setItem('monPanier', JSON.stringify([productAdded]));
        alert('Vos articles ont été ajoutés au panier');
        document.location = 'cart.html';
    }

};







