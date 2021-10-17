import LoaderController from "./controllers/LoaderController.js"
import ProductsListController from "./controllers/ProductsListController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function () {

    // Instancia del Loader
    const loaderDiv = document.querySelector('.spinner-loader')
    new LoaderController(loaderDiv)

    // Crear una instancia del controlador de mensajes
    const messages = document.querySelector('.messages')
    new MessageController(messages)

    // Obtener categoría del anuncio de la URL
    const category = new URLSearchParams(window.location.search).get('category')

    // Capturar el elemento del DOM donde cargan los anuncios
    const productListDiv = document.querySelector('.products')

    // Crear controlador enviándole elemento del DOM donde carga los anuncios
    const productListController = new ProductsListController(productListDiv)
    
    productListController.getProductsFilter(category)

})