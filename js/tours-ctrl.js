const templateCard = function ({ name, image, description, price, phone, web, email, buttonLink }) {
    return `<div class="tour">
                <div class="tour-content">
                    <div class="titulo-tour-container">                            
                        <h3 class="titulo-tours" style="margin-bottom: 15px;">${name}</h3>
                    </div>
                    <img src= ${image} style="width: 300px; height: 300px; object-fit: cover;">                        
                    <p class="info-tour">${description}</p>
                    <p class="price">$${price}</p>

                    <ul class="info-icons">
                        <li>
                            <i class="fas fa-phone-alt">&nbsp</i>
                            <a href="#">${phone}</a>
                        </li>
                        <li>
                            <i class="fas fa-globe-americas">&nbsp</i>
                            <a href="https://${web}">${web}</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope">&nbsp</i>
                            <a>${email}</a>
                        </li>
                    </ul>
                    <button class="btn-vp"><a href="${buttonLink}" class="backgroud-transparent">Ver más</a></button>
                </div>
            </div>`
}

const loadCards = function (allToursJSON) {
    let childs = "";
    allToursJSON.forEach(r => {
        const cardInformation = {
            name: r.name,
            image: r.image,
            description: r.description,
            price: r.price,
            phone: r.phone,
            web: r.web,
            email: r.email,
            buttonLink: r.buttonLink,
            styleImage: r.styleImage
        }
        childs += templateCard(cardInformation)
    })
    return childs;
}

$( document ).ready(function() {
    const cardsContainer = $("#allOffersContainer");
	cardsContainer.html("");

    const allToursJSON = JSON.parse(localStorage.getItem('tours-data'))
    cardsContainer.html(loadCards(allToursJSON))
});

