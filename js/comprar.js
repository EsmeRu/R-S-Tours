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

const calculateTotal = function() {
    const shopingJSON = JSON.parse(localStorage.getItem('buyCar'));
    const totalLabel = document.getElementById("total")
    const subTotalLabel = document.getElementById("subtotal")
    const shipmentDutyLabel = document.getElementById("shipment-duty")

    var subTotal = 0
    shopingJSON.forEach(tours => {
        subTotal = subTotal + Number.parseInt(tours.price)
    }); 
    var shipmenDuty = subTotal * 0.15
    var total = subTotal + shipmenDuty

    totalLabel.innerHTML = "$" + total
    subTotalLabel.innerHTML = "$" + subTotal
    shipmentDutyLabel.innerHTML = "$" + shipmenDuty
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
            calculateTotal();
        })
    })
    calculateTotal();
}

$('#comprarTodo').click(() => {
    if(localStorage.getItem('buyCar') != undefined){
        localStorage.removeItem('buyCar')
        alert("Gracias por comprar en R&S Tours")
        location.reload()
    } else {
        alert("Parece que no tienes nada en el carrito, ve a la sección de Tours para añadir productos")
    }
    
})


$(document).ready(function () {
    reloadCards();
});
