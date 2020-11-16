
const templateCard = function ({ name, image, description, price, phone, web, email, buttonLink, styleImage }) {
    return `<div class="tour ${styleImage}">
                <div class="tour-content">
                    <div class="titulo-tour-container">                            
                        <h3 class="titulo-tours">${name}</h3>
                    </div>                        
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

const loadCards = function (allTours) {
    let childs = "";
    results.forEach(r => {
        const cardInformation = {
            name: r.name,
            image: r.image,
            description: r.description,
            price: r.price,
            phone: r.phone,
            web: r.web,
            email: r.email,
            buttonLink: r.button-link,
            styleImage: r.styleImage
        }


        childs += templateCard(cardInformation)
    })
    return childs;
}

