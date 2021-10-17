import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"
import { formRegister } from "../views/formsView.js"
import RegisterFormController from "./RegisterFormController.js"
import LoaderController from "./LoaderController.js"


export default class LoginFormController {

    constructor(element) {
        this.element = element
        this.formEventListeners()
    }

    formEventListeners() {
        this.element.addEventListener('submit', async function(event) {
            
            event.preventDefault()

            if (this.checkValidity()) {
                
                const data = new FormData(this)
                const username = data.get('username')
                const password = data.get('password')
                const url = new URLSearchParams(window.location.search)
                const next = url.get('next') || '/'
                try {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    const result = await DataService.loginUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Has iniciado sesión con éxito!')
                    // location.href = next
                    location.reload()
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                } finally {
                    PubSub.publish(PubSub.events.HIDE_LOADING)
                }
            } else {
                PubSub.publish(PubSub.events.HIDE_LOADING)
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el campo ${element.name}: ${element.validationMessage}. <br>`
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage)
            }
        })

        const registerLink = this.element.querySelector('.register-link')
        registerLink.addEventListener('click', function (event) {
            event.preventDefault()

            const body = document.querySelector('body')
            const login = body.querySelector('.wrapper')
            body.removeChild(login)

            body.insertAdjacentHTML('afterbegin', formRegister())
            // Controlador del Loader
            const loaderDiv = document.querySelector('.spinner-loader')
            new LoaderController(loaderDiv)
            // Controlador del formulario
            const form = body.querySelector('.user-form')
            new RegisterFormController(form)


            const wrapper = body.querySelector('.wrapper')
            const url = window.location.pathname
            
            if (url === '/products-create.html') {
                wrapper.addEventListener('click', function (ev) {
                    const target = ev.target
                    if (target === this) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, 'Debes iniciar sesión o registrarte para crear un anuncio')
                        // alert('Debes iniciar sesión o registrarte para crear un anuncio')
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