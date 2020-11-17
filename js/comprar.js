const templateCard = function ({ id, name, image, price }) {
    return `<div class="item">
                <img class="image-shop" src="${image}">
                <div class="info-product">
                    <ul>
                        <li id="idLi"><strong>ID: </strong><span id="idItem">${id}</span></li>
                        <li><strong>Tour: </strong>${name}</li>
                        <li><strong>$</strong>${price} MXN</li>
                        <li><button id="delete" class="btn-submit btn-delete">Eliminar</button><li>
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

const reloadCards = function() {
    const cardsContainer = $("#shoppingList");
    if (carritoLocal != null){
        cardsContainer.html(loadCards(carritoLocal))
    }
    else{
        cardsContainer.html(`<h1 style="height: 100vh;">No tienes productos en el carrito :c</h1>`);
    }
    document.querySelectorAll('#delete').forEach(btn => {
        console.log("k pdo")
        btn.addEventListener("click", e =>{
            const parentLi = e.target.parentElement
            const parentUl = parentLi.parentElement
            const parentDiv = parentUl.parentElement
            const parentDivItems = parentDiv.parentElement
            const parentContainerDiv = parentDivItems.parentElement

            const shopingJSON = JSON.parse(localStorage.getItem('buyCar'));

            const lis = document.querySelectorAll('#idItem')
            let idToDelete
            let indexToDelete
            lis.forEach(results => {
                if(results.parentElement.parentElement === parentUl){
                    idToDelete = results.innerHTML
                }
            });

            for(let x=0; x<shopingJSON.length;x++){
                if(shopingJSON[x].id === idToDelete){
                    indexToDelete = x;
                }
            }

            shopingJSON.splice(indexToDelete,1);
            localStorage.setItem('buyCar',JSON.stringify(shopingJSON))

            parentContainerDiv.removeChild(parentDivItems);
        })
    })
}

$(document).ready(function () {
    reloadCards();
});
