async function getProduct (id) {
    let productReturn = ""
    return fetch('http://localhost:3000/api/products/' + id)
    .then((response) => response.json())
    .then(product => {
        return product
    })
    
}
