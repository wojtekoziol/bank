function signIn() {
    setup();
    for (let i = 0; i < data.length; i++) {
        if (document.querySelector(".login").value === data[i].login && document.querySelector(".password").value === data[i].password) {
            loggedIndex = i;
            localStorage.setItem("loggedIndex", JSON.stringify(loggedIndex));
            return (window.location.href = "my-account.html");
        }
    }
    error("Podano niepoprawne dane logowania");
}
