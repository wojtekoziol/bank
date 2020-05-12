function changePassword() {
    setup();
    if (
        document.querySelector(".new-password").value === "" ||
        document.querySelector(".old-password").value === "" ||
        document.querySelector(".confirm-new-password").value === ""
    ) {
        error("Żadne z pól nie może być puste");
    } else if (document.querySelector(".old-password").value !== data[loggedIndex].password) {
        error("Podano niepoprawne hasło");
    } else if (document.querySelector(".new-password").value !== document.querySelector(".confirm-new-password").value) {
        error("Hasła nie zgadzają się");
    } else {
        data[loggedIndex].password = document.querySelector(".new-password").value;
        localStorage.setItem("data", JSON.stringify(data));

        window.location.href = "my-account.html";
    }
}
