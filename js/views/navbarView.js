export function navLoginView(user) {

    if (user) {
        return `
        <div class="navbar-brand">
            <a class="navbar-item" href="./index.html">
                <img src="../images/nodepop-logo.png">
            </a>
    
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <div class="navbar-item">
                    <span class="control has-icons-left">
                        <input type="search" class="input" name="search" id="search" placeholder="Qué estás buscando?">
                        <span class="icon is-small is-left">
                            <i class="fas fa-search"></i>
                        </span>
                    </span>
                </div>

                <div class="navbar-item">
                    <div class="dropdown" id="drop-menu">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>categoría</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <hr class="dropdown-divider">
                                <a href="./categories.html?category=Vehículos" class="dropdown-item">
                                    Vehículos
                                </a>
                                <a href="./categories.html?category=Tecnología" class="dropdown-item">
                                    Tecnología
                                </a>
                                <a href="./categories.html?category=Inmobiliaria" class="dropdown-item">
                                    Inmobiliaria
                                </a>
                                <a href="./categories.html?category=Decoración" class="dropdown-item">
                                    Decoración
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-end">

                <div class="navbar-item">
                    <div class="buttons">
                        <!-- <a class="button is-primary"">
                            <i class="fas fa-user-circle"></i>
                            <strong>${user}</strong>
                        </a> -->

                        <div class="dropdown" id="drop-user">
                            <div class="dropdown-trigger">
                                <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <i class="fas fa-user-circle"></i>
                                    <strong>${user}</strong>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="./products-create.html" class="dropdown-item">
                                        Crear Anuncio
                                    </a>
                                    <a class="dropdown-item" href="/my-products.html">
                                        Mis Anuncios
                                    </a>
                                    <hr class="dropdown-divider">
                                    <a class="dropdown-item" id="logout">
                                        Cerrar Sesión
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a class="button is-link" href="./products-create.html">
                            + Crear Anuncio
                        </a>
                    </div>
                </div>
            </div>
        </div>

                    <!-- <div class="buttons">
                        <a class="button is-light" id="logout">
                            Cerrar Sesión
                        </a>
                    </div> -->
        `
    }
}

export function navLogoutView() {

    return `
        <div class="navbar-brand">
            <a class="navbar-item" href="./index.html">
                <img src="../images/nodepop-logo.png">
            </a>
    
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <div class="navbar-item search">
                    <span class="control has-icons-left">
                        <input type="search" class="input" name="search" id="search" placeholder="Qué estás buscando?">
                        <span class="icon is-small is-left">
                            <i class="fas fa-search"></i>
                        </span>
                    </span>
                </div>

                <div class="navbar-item menu">
                    <div class="dropdown" id="drop-menu">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>categoría</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <hr class="dropdown-divider">
                                <a href="./categories.html?category=Vehículos" class="dropdown-item">
                                    Vehículos
                                </a>
                                <a href="./categories.html?category=Tecnología" class="dropdown-item">
                                    Tecnología
                                </a>
                                <a href="./categories.html?category=Inmobiliaria" class="dropdown-item">
                                    Inmobiliaria
                                </a>
                                <a href="./categories.html?category=Decoración" class="dropdown-item">
                                    Decoración
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="navbar-end">

                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" id="login">
                            <i class="fas fa-user-circle"></i>
                            <strong>Ingresa</strong>
                        </a>

                        <a class="button is-link" href="./products-create.html">
                            + Crear Anuncio
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `
}