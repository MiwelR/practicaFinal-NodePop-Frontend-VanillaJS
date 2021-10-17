
export default {

    parseProduct: function(product) {
        product.date = product.date || product.updatedAt
        product.userPost = product.user.username
        product.title = product.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        product.description = product.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        product.canBeDeleted = product.userId === this.getAuthUserId()
        return product
    },

    getProducts: async function() {
        const url = 'http://localhost:8000/api/products?_expand=user'
        const response = await fetch(url)

        if (response.ok) {
            const products = await response.json()
            return products.map(product => this.parseProduct(product))
        } else {
            throw new Error('Error al obtener anuncios')
        }
    },

    getMyProducts: async function(userId) {
        const url = `http://localhost:8000/api/products?_expand=user&userId=${userId}`
        const response = await fetch(url)

        if (response.ok) {
            const products = await response.json()
            return products.map(product => this.parseProduct(product))
        } else {
            throw new Error('Error al obtener anuncios')
        }
    },

    getProductsDetails: async function(productId) {
        const url = `http://localhost:8000/api/products/${productId}?_expand=user`
        const response = await fetch(url)
        if (response.ok) {
            const product = await response.json()
            return this.parseProduct(product)
        } else {
            if (response.status === 404) {
                return null
            } else {
                throw new Error('Error al cargar el anuncio')
            }
        }
    },

    getProductsFilters: async function (filter) {
        const url = `http://localhost:8000/api/products?_expand=user&category=${filter}`
        
        const response = await fetch(url)
        if (response.ok) {
            const products = await response.json()
            return products.map(product => this.parseProduct(product))
        } else {
            if (response.status === 404) {
                return null
            } else {
                throw new Error('Error al cargar el anuncio')
            }
        }
    },

    post: async function(url, body) {
        return await this.request('POST', url, body)
    },

    put: async function(url, body) {
        return await this.request('PUT', url, body)
    },

    delete: async function(url, body={}) {
        return await this.request('DELETE', url, body)
    },

    request: async function(method, url, body) {
        const requestConfig = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            // requestConfig.headers.Authorization = `Bearer ${token}`
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)
        try {
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },

    registerUser: async function(username, password) {
        const url = 'http://localhost:8000/auth/register'
        return await this.post(url, {username, password})
    },

    loginUser: async function(username, password) {
        const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, {username, password})
        const token = data.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
    },

    logoutUser: function () {
        return localStorage.removeItem('AUTH_TOKEN')
    },

    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    createProduct: async function(state, category, image, title, price, description) {
        const url = 'http://localhost:8000/api/products'
        return await this.post(url, {state, category, image, title, price, description})
    },

    deleteProduct: async function(productID) {
        const url = `http://localhost:8000/api/products/${productID}`
        return await this.delete(url)
    },

    getAuthUserId: function() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    },

    getAuthUserName: function() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.username
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    }

}