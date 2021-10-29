
//lecture local storage
let monPanier = localStorage.getItem("monPanier");

//transformation en tableau javascript
let productAdded = JSON.parse(monPanier);
console.log(productAdded)

//afficher les produits
let productsCardHTML = ""
productAdded.forEach(async productChosen => {
  console.log(productChosen)
  let product = await getProduct(productChosen.idChosen)
    productsCardHTML += `
    <article class="cart__item" data-id="${productChosen.idChosen}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altTxt}">
    </div>
    <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${product.name} - ${productChosen.colorChosen}</h2>
                    <p>${product.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productChosen.quantityChosen}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
`
document.getElementById('cart__items').innerHTML = productsCardHTML
})


//addEventListener de type change pour observer le changement de la quantité
const changeQty =  document.querySelectorAll('input.itemQuantity');
changeQty.addEventListener("change", (event) => {
    event.preventDefault();
})
//méthode Element.closest() devrait permettre de cibler l’identifiant du produit à supprimer / de la quantité à modifier

//calcul du montant total du panier
let calculTotalPrice = [];
//récupérer les prix dans le panier
for (let a = 0; a < productAdded.lenght; a++) {
  let productsAddedPrice = productAdded[a].price * productAdded[a].quantityChosen;
  //mettre les prix dans le tableau
  calculTotalPrice.push(productsAddedPrice);
}
// Additionner les prix du tableau dans la variable calculTotalPrice avec la méthode reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = calculTotalPrice.reduce(reducer);
//affichage prix html
document.getElementById('totalPrice').innerHTML = totalPrice;

/*//formulaire 
let formulaire = document.querySelector('.cart__order__form');

// Ecouter la modification
formulaire.firstName.addEventListener('change', function () {
	();
}); 
utiliser regex*/