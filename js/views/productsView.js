export function productView(product) {

    if (product === null) {
        return '<h1>NO HAY ANUNCIOS DISPONIBLES...SÉ EL PRIMERO Y CREA EL TUYO!!!</h1>'
    }

    return `
    <a href="./products-details.html?id=${product.id}">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="${product.image}" alt="${product.title}">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <!-- <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="${product.image}" alt="${product.title}">
                        </figure>
                    </div> -->
                    <div class="media-content">
                        <p class="title is-4 price">${product.price}€</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${product.title}</p>
                    </div>
                    <div class="media-content">
                        <p class="subtitle is-6">${product.state}: <span class="namecolor">@${product.userPost}</span></p>
                    </div>
                </div>

                <div class="content">
                    Categoría: ${product.category}
                    <br>
                </div>
            </div>
        </div>
    </a>
    `
}

export function detailProductView(product) {

    if (product === null) {
        return '<h1>:( LO SENTIMOS...NO SE HAN ENCONTRADO LOS DETALLES DEL ANUNCIO</h1>'
    }
    let button = ''
    if (product.canBeDeleted) {
        button = '<button class="button is-danger is-outlined">Eliminar Anuncio</button>'
    }

    return `
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="${product.image}" alt="${product.title}">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${product.title}</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 description">${product.description}</p>
                    </div>
                    <div class="media-content">
                        <p class="subtitle is-6 state">Categoría: ${product.category}</p>
                    </div>
                    <div class="media-content">
                        <p class="subtitle is-6 state">${product.state}: <span class="namecolor">@${product.userPost}</span></p>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 price">${product.price}€</p>
                    </div>
                </div>

                <!-- <div class="content">
                    ${product.description}
                    <br>
                </div> -->

                <div class="field is-grouped">
                        <div class="control">
                            ${button}
                        </div>
                </div>
            </div>
        </div>
    `
}