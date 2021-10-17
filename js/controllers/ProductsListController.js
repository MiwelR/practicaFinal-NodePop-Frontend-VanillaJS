import DataService from '../services/DataService.js'
import { productView } from '../views/productsView.js'
import PubSub from "../services/PubSub.js"

export default class ProductsListController {

    constructor(element) {
        this.element = element
        // this.getProducts()
    }

    async getProducts() {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const products = await DataService.getProducts()
            for (const product of products) {
                const productElement = document.createElement('article')
                productElement.innerHTML = productView(product)
                this.element.appendChild(productElement)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    async getMyProducts(userId) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const products = await DataService.getMyProducts(userId)
            for (const product of products) {
                const productElement = document.createElement('article')
                productElement.innerHTML = productView(product)
                this.element.appendChild(productElement)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    async getProductsFilter(filter) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const products = await DataService.getProductsFilters(filter)
            for (const product of products) {
                const productElement = document.createElement('article')
                productElement.innerHTML = productView(product)
                this.element.appendChild(productElement)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

}