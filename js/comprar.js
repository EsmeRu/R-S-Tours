const tourList = document.getElementById('tour-list')

const templateCard = function ({ id, name, image, price }) {
    return `<div class="item">
                <img class="image-shop" src="${image}">
                <div class="info-product">
                    <ul>
                        <li><strong>ID: </strong>${id}</li>
                        <li><strong>Tour: </strong>${name}</li>
                        <li><strong>$</strong>${price} MXN</li>
                    </ul>
                </div>
            </div>`
}

const loadCards = function (carritoLocal) {
    let childs = "";
    carritoLocal.forEach(r => {
        const cardInformation = {
            id: r.id,
            name: r.name,
            image: r.image,
            price: r.price
        }
        childs += templateCard(cardInformation)
    })
    return childs;
}

$(document).ready(function () {
    const cardsContainer = $("#shoppingList");
    if (carritoLocal != null){
        cardsContainer.html(loadCards(carritoLocal))
    }
    else{
        cardsContainer.html(`<h1>No tienes productos en el carrito :c</h1>`);
    }
    
});