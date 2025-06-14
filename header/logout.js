function logout() {
    localStorage.removeItem('jwt');
    window.location.reload();
}

function returnPage() {
    const returnUrl = document.referrer && document.referrer.includes(window.location.host)
        ? document.referrer
        : 'index.html';

    window.location.href = returnUrl;
}