import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class ProductNewController {

    constructor(element) {
        this.element = element
        this.formEventListener()
    }

    formEventListener() {
        const loadImage = document.querySelector('.button.is-info.is-small')
        const preview = document.querySelector('.media-left>.image>img')

        loadImage.addEventListener('click', async () => {
            PubSub.publish(PubSub.events.HIDE_LOADING)
            try {
                PubSub.publish(PubSub.events.SHOW_LOADING)
                const dataURL = new FormData(this.element)
                const imageURL = await dataURL.get('image-product')
                console.log(imageURL)
                preview.src = imageURL
            } catch (error) {
                PubSub.publish(PubSub.events.SHOW_ERROR, error)
            } finally {
                PubSub.publish(PubSub.events.HIDE_LOADING)
            }
        })

        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                PubSub.publish(PubSub.events.HIDE_LOADING)
                const data = new FormData(this.element)
                const state = data.get('state')
                const category = data.get('category')
                const image = data.get('image-product')
                const title = data.get('title')
                const price = data.get('price')
                const description = data.get('description')
                try {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    const result = await DataService.createProduct(state,category,image,title,price,description)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio creado con éxito!')
                    window.location.href = '/'
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                } finally {
                    PubSub.publish(PubSub.events.HIDE_LOADING)
                }
            } else {
                PubSub.publish(PubSub.events.SHOW_ERROR, 'Debes rellenar todos los campos para crear un anuncio')
            }
        })
    }

}