export function formLogin() {

    return `
        <div class="messages"></div>
        <div class="wrapper">
            <div class="columns is-mobile">
                <div class="column is-3">
                    <form class="user-form" novalidate>
                        <h3>Inicia sesión</h3>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="spinner-loader"></div>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" name="username" placeholder="Usuario" required
                                    autofocus>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" name="password" placeholder="Contraseña" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-unlock-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button type="submit" class="button is-link">
                                    Entrar a mi cuenta
                                </button>
                            </div>
                        </div>
                        <div class="banner">
                            <p>No tienes cuenta?  <a class="register-link" href="./register.html"><strong>Regístrate</strong></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `
}

export function formRegister() {

    return `
        <div class="wrapper">
            <div class="columns is-mobile">
                <div class="column is-3">
                    <form class="user-form" novalidate>
                        <h3>Regístrate</h3>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="spinner-loader"></div>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" name="username" placeholder="Usuario" required autofocus>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" name="password" placeholder="Contraseña" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-unlock-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" name="passwordRepeat" placeholder="Confirmar Contraseña" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-unlock-alt"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button type="submit" class="button is-link register">
                                    Crear cuenta
                                </button>
                            </div>
                        </div>
                        <div class="banner-login">
                            <p>Ya tienes una cuenta? <a class="login-link" href="./login.html"><strong>Inicia sesión</strong></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `
}