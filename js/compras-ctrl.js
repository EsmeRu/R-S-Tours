let carrito = []
const carritoLocal = JSON.parse(localStorage.getItem('buyCar'))

$('#addCart').click( () => {
    const titleLabel = document.getElementById("tourTitle").innerHTML
    const toursData = JSON.parse(localStorage.getItem('tours-data'))
    const tryToBuy = {}

    toursData.forEach(tour => {
        if(tour.name === titleLabel){
            tryToBuy.id = tour.id
            tryToBuy.name = tour.name
            tryToBuy.image = tour.image
            tryToBuy.price = tour.price
        }       
    });

    if(carritoLocal != null){
        console.log(carritoLocal)
        carritoLocal.push(tryToBuy)        
        localStorage.setItem('buyCar', JSON.stringify(carritoLocal))
        alert("Tour añadido al carrito");
    } else {
        carrito.push(tryToBuy)
        localStorage.setItem('buyCar', JSON.stringify(carrito));
        alert("Tour añadido al carrito");
    }
  });
  
