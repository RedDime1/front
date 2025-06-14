function initHeader() {
    const jwt = localStorage.getItem("jwt");
    const authDiv = document.getElementById("auth-loader");

    if (jwt && authDiv) {
        authDiv.setAttribute("hx-get", authDiv.getAttribute("data-hx-get"));
        authDiv.removeAttribute("data-hx-get");
        htmx.process(authDiv);
    }

    document.body.addEventListener('htmx:responseError', function (evt) {
        if (evt.detail.xhr.status === 401) {
            localStorage.removeItem('jwt');
            console.warn("JWT is invalid or expired");
        }
    });
}
