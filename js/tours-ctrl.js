
const templateCard = function ({ name, image, gender, species, episode }) {
    return `<div class="card mb-5">
                                    <duv class="card-img">
                                        <img src="${image}" alt="">
                                    </duv>
                                    <div class="card-content">
                                        <h3 class="card-header-title">${name}</h3>
                                        <div class="content">
                                            <ul>
                                                <li class="list"><strong>Género: </strong>${gender}</li>
                                                <li><strong>Especie: </strong>${species}</li>
                                                <li><strong>Episodios: </strong>${episode}</li>
                                            </ul>
                                        </div>
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
            buttonLink: r.button-link
        }

        childs += templateCard(cardInformation)
    })
    return childs;
}