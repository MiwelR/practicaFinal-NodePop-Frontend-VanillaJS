import LoaderController from "./controllers/LoaderController.js"
import ProductsListController from "./controllers/ProductsListController.js";
import MessageController from "./controllers/MessageController.js"
import DataService from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', function () {

    if (DataService.isAuthenticed() === false) {
        const formCreate = document.querySelector('.wrapper-formcreate')
        formCreate.style.display = 'none'
        const button = document.querySelector('#login')
        button.click()
    }

    // Instancia del Loader
    const loaderDiv = document.querySelector('.spinner-loader')
    new LoaderController(loaderDiv)

    // Crear una instancia del controlador de mensajes
    const messages = document.querySelector('.messages')
    new MessageController(messages)

    // Capturar el elemento del DOM donde cargan los anuncios
    const productListDiv = document.querySelector('.products')

    // Crear controlador enviándole elemento del DOM donde carga los anuncios
    const productListController = new ProductsListController(productListDiv)

    const userId = DataService.getAuthUserId()
    productListController.getMyProducts(userId)

})