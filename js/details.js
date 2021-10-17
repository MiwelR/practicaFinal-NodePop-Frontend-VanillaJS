import LoaderController from "./controllers/LoaderController.js"
import ProductsDetailsController from "./controllers/ProductsDetailsController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function () {

    // Instancia del Loader
    const loaderDiv = document.querySelector('.spinner-loader')
    new LoaderController(loaderDiv)

    // Obtener el ID del anuncio de la URL
    const id = new URLSearchParams(window.location.search).get('id')

    // Selección del DIV donde cargarán los detalles
    const detailDiv = document.querySelector('.details')
    // Instacia del controlador de detalles de anuncios
    new ProductsDetailsController(detailDiv, id)

    // Crear una instancia del controlador de mensajes
    const messages = document.querySelector('.messages')
    new MessageController(messages)

})