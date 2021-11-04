
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
function changeQty() {
  let qtyModif = document.querySelectorAll(".itemQuantity");
    for (let a = 0; a < qtyModif.length; a++){
      qtyModif[a].addEventListener("change" , (event) =>{
          event.preventDefault();
//Selection de l'element à modifier
          let quantityModif = productAdded[a].quantityChosen;
          let quantityValue = qtyModif[a].valueAsNumber;

          localStorage.setItem("monPanier", JSON.stringify(productAdded));

          // refresh
          location.reload();
      })
  }
}
changeQty();


//supprimer un produit
function deleteProduct() {
  let btn_supprimer = document.querySelectorAll(".deleteItem");
  for (let b = 0; b < btn_supprimer.length; b++){
    btn_supprimer[b].addEventListener("click" , (event) => {
        event.preventDefault();
//Selection de l'element à supprimer en fonction de son id ET sa couleur
let idDelete = productAdded[b].idChosen;
let colorDelete = productAdded[b].colorChosen;
//avec la méthode filter je supprime l'élément cliqué
productAdded = productAdded.filter( el => el.idChosen !== idDelete || el.colorChosen !== colorDelete );
//trandformation en JSON et l'envoyer dans la key du local storage
localStorage.setItem("monPanier", JSON.stringify(productAdded));
//Alerte produit supprimé et refresh
alert("Ce produit a bien été supprimé du panier");
location.reload();
    })
  }
};
deleteProduct();


//calcul du montant total du panier
let calculTotalPrice = [];
//récupérer les prix dans le panier
for (let c = 0; c < productChosen.lenght; c++) {
  let productsAddedPrice = productChosen[c].price * productChosen[c].quantityChosen;
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
	
}); 
//utiliser regex*/