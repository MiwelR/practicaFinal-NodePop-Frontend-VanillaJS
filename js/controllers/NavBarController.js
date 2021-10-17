import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"
import { navLogoutView, navLoginView } from "../views/navbarView.js"
import { formLogin } from "../views/formsView.js"
import LoginFormController from "./LoginFormController.js"
import LoaderController from "./LoaderController.js"
import MessageController from "./MessageController.js"

export default class NavBarController {

    constructor(element) {
        this.element = element
        this.getNav()
        this.dropDownMenu()
        this.formLogin()
    }

    getNav() {
        try {
            const auth = DataService.isAuthenticed()
            if (auth) {
                const username = DataService.getAuthUserName()
                this.element.innerHTML = navLoginView(username)
                this.logoutUser()
            } else {
                this.element.innerHTML = navLogoutView()
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
    }

    logoutUser() {
        const button = this.element.querySelector('#logout')
        if (button) {
            button.addEventListener('click', async () => {
                await DataService.logoutUser()
                window.location.href = '/'
            })
        }
    }

    dropDownMenu() {
        const dropMenu = this.element.querySelectorAll('.dropdown')
        dropMenu.forEach(element => {
            element.addEventListener('click', function () {
            if (this.className === 'dropdown') {
                this.className = 'dropdown is-active'
            } else {
                this.className = 'dropdown'
            }
            })
        })
    }

    formLogin() {
        const button = this.element.querySelector('#login')
        button.addEventListener('click', () => {
            const body = document.querySelector('body')
            body.insertAdjacentHTML('afterbegin', formLogin())

            // Controlador del Loader
            const loaderDiv = document.querySelector('.spinner-loader')
            new LoaderController(loaderDiv)

            // Crear una instancia del controlador de mensajes
            const messages = document.querySelector('.messages')
            new MessageController(messages)

            // Controlador del formulario
            const form = body.querySelector('.user-form')
            new LoginFormController(form)

            // Control de eventos fuera del formulario
            const wrapper = body.querySelector('.wrapper')
            const url = window.location.pathname
            
            if (url === '/products-create.html') {
                wrapper.addEventListener('click', function (ev) {
                    const target = ev.target
                    if (target === this) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, 'Debes iniciar sesión o registrarte para crear un anuncio')
                    }
                })
            } else {
                wrapper.addEventListener('click', function (event) {
                    const target = event.target
                    if (target === this) {
                        body.removeChild(this)
                    }
                })
            }
        })
    }

}