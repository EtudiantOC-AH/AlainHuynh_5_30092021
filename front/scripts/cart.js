
//lecture local storage
let monPanier = localStorage.getItem("monPanier");

//transformation en tableau javascript
let productAdded = JSON.parse(monPanier);
console.log(productAdded)

//afficher les produits
let productsCardHTML = ""
productAdded.forEach(productChosen => {
  console.log(productChosen)
    productsCardHTML += `
    <article class="cart__item" data-id="${productChosen.idChosen}">
    <div class="cart__item__img">
      <img src="${productChosen.imageUrlChosen}" alt="${productChosen.altTxtChosen}">
    </div>
    <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${productChosen.titleChosen}</h2>
                    <p>${productChosen.priceChosen}</p>
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
/*const suppPanier =  document.querySelectorAll('input.itemQuantity');
suppPanier.addEventListener('change', () => {

}
//méthode Element.closest() devrait permettre de cibler l’identifiant du produit à supprimer / de la quantité à modifier
let = element.closest()*/

//<p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>



