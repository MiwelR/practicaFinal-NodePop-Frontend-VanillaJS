import PubSub from "../services/PubSub.js"
import { errorView, successView } from "../views/interfaceStateViews.js"

export default class MessageController {

    constructor(element) {
        this.element = element
        // suscribimos el controlador a los eventos que nos interesa
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.showError(error)
        })

        // nos subscribimos al evento para mostrar mensajes de error
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.showSuccess(message)
        })
    }

    closeMessageEventListener() {
        const button = this.element.querySelector('.delete')
        button.addEventListener('click', () => {
            this.hideError()
        })
    }

    showSuccess(message) {
        this.element.style.display = 'flex'
        this.element.innerHTML = successView(message)
        this.closeMessageEventListener()
    }

    showError(message) {
        this.element.style.display = 'flex'
        this.element.innerHTML = errorView(message)
        this.closeMessageEventListener()
    }

    hideError() {
        const messages = document.querySelector('.messages')
        messages.style.display = 'none'
        this.element.style.display = 'none'
    }
}
