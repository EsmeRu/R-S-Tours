const templateCard = function ({ id, name, image, price }) {
    return `<div class="item">
                <img class="image-shop" src="${image}">
                <div class="info-product">
                    <ul>
                        <li><strong>ID: </strong><span id="idItem">${id}</span></li>
                        <li><strong>Tour: </strong>${name}</li>
                        <li><strong>$</strong>${price} MXN</li>
                        <button id="delete" class="btn-submit btn-delete">Eliminar</button>
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
        cardsContainer.html(`<h1 style="height: 100vh;">No tienes productos en el carrito :c</h1>`);
    }
    
    $('#delete').click(() =>{
        
    })
});
