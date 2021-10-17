import ProductNewController from "./controllers/ProductNewController.js"
import DataService from "./services/DataService.js"
import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"

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

    // Controlador del formulario de nuevo anuncio
    const form = document.querySelector('.create-product')
    new ProductNewController(form)

    // Controlar mensajes
    const messages = document.querySelector('.messages')
    new MessageController(messages)

})