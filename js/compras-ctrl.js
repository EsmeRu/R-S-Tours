const carrito = [];
const carritoJSON = JSON.parse(localStorage.getItem('cart'));

$('#addCart').click( () => {

    const newBuy = {
        id: id,
        name: name,
        image: image,
        price: price
    };

    if((localStorage.getItem('cart')) != null){
        carritoJSON.push(newBuy);
        localStorage.setItem('cart', JSON.stringify(carritoJSON));
        alert("Se añadió al carrito")
    }
    else{
        carrito.push(newBuy);
        localStorage.setItem('users', JSON.stringify(carrito));
        alert("Se añadió al carrito")
    }
  });
  
