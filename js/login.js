import LoginFormController from "./controllers/LoginFormController.js"
import LoaderController from "./controllers/LoaderController.js"

window.addEventListener('DOMContentLoaded', function () {

    // Seleccionando el nodo del formulario
    const form = document.querySelector('form')
    // Instancia del controlador del formulario
    new LoginFormController(form)

    // Instancia del Loader
    const loaderDiv = document.querySelector('.spinner-loader')
    new LoaderController(loaderDiv)

    // Seleccionando el nodo donde mostrar mensajes de error
    

    // Instancia del controlador de mensajes de error


})