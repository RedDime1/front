function logout() {
    localStorage.removeItem('jwt');
    window.location.reload();
}