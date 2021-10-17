import DataService from "../services/DataService.js"
import { detailProductView } from "../views/productsView.js"
import PubSub from "../services/PubSub.js"

export default class ProductsDetailsController {

    constructor(element, productId) {
        this.element = element
        this.loadProduct(productId)
    }

    async loadProduct(productId) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const product = await DataService.getProductsDetails(productId)
            this.element.innerHTML = detailProductView(product)
            this.addDeleteButtonEvent(product)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    addDeleteButtonEvent(product) {
        const button = this.element.querySelector('button')
        if (button) {
            button.addEventListener('click', async () => {
                const answer = confirm('Este anuncio se eliminará permanentemente. ¿Está seguro?')
                if (answer === true) {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    button.setAttribute('disabled', 'disabled')
                    try {
                        await DataService.deleteProduct(product.id)
                        window.location.href = '/?message=product-deleted'
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, error)
                        button.removeAttribute('disabled')
                    } finally {
                        PubSub.publish(PubSub.events.HIDE_LOADING)
                    }
                }
            })
        }
    }

}