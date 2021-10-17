import NavBarController from '../js/controllers/NavBarController.js'

window.addEventListener('DOMContentLoaded', function () {

    // Seleccionar la etiqueta nav
    const nav = document.querySelector('nav')
    
    // Instancia del controller
    new NavBarController(nav)

})