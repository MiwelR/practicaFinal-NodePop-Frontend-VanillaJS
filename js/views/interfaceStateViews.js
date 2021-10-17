export function loaderView() {
    return `
        <div class="loadingio-spinner-dual-ring-d4d87yp3cyq">
            <div class="ldio-ioa9xp20wdk"><div></div><div><div></div></div></div>
        </div>
        `
}

export function successView(message) {
    return `
        <article class="message is-success">
            <div class="message-header">
                <p></p>
                <button class="delete is-small" aria-label="delete"></button>
            </div>
            <div class="message-body">
                ${message}
            </div>
        </article>
        `
}

export function errorView(message) {
    return `
        <article class="message is-danger">
            <div class="message-header">
                <p>ERROR</p>
                <button class="delete is-small" aria-label="delete"></button>
            </div>
            <div class="message-body">
                ${message}
            </div>
        </article>
        `
}
