import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"
import { formLogin } from "../views/formsView.js"
import LoginFormController from "./LoginFormController.js"
import LoaderController from "./LoaderController.js"


export default class RegisterFormController {

    constructor(element) {
        this.element = element
        this.formEventListeners()
    }

    checkIfAllPasswordsAreEqual() {
        const inputsPassword = this.element.querySelectorAll('input[type="password"]')

        // guardo las contraseñas que hay en los inputs
        let passwords = []
        for (const input of inputsPassword) {
            if (passwords.includes(input.value) === false) {
                passwords.push(input.value)
            }
        }

        if (passwords.length == 1) {
            // esta bien
            for (const input of inputsPassword) {
                input.setCustomValidity('')
            }
        } else {
            // esta mal
            for (const input of inputsPassword) {
                input.setCustomValidity('Las password no coinciden')
            }
        }

    }

    formEventListeners() {
        this.element.addEventListener('submit', async function(event) {
            
            event.preventDefault()
            
            if (this.checkValidity()) {
                try {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    const data = new FormData(this)
                    const username = data.get('username')
                    const password = data.get('password')
                    const result = await DataService.registerUser(username, password)
                    location.reload()
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Has creado tu cuenta con éxito!')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                } finally {
                    PubSub.publish(PubSub.events.HIDE_LOADING)
                }
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el campo ${element.name}: ${element.validationMessage}. <br>`
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage)
            }
        })

        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () => {
                this.checkIfAllPasswordsAreEqual()
            })
        })

        const login = this.element.querySelector('.login-link')
        login.addEventListener('click', function (event) {
            event.preventDefault()

            const body = document.querySelector('body')
            const login = body.querySelector('.wrapper')
            body.removeChild(login)

            body.insertAdjacentHTML('afterbegin', formLogin())

            // Controlador del Loader
            const loaderDiv = document.querySelector('.spinner-loader')
            new LoaderController(loaderDiv)

            // Controlador del formulario
            const form = body.querySelector('.user-form')
            new LoginFormController(form)

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