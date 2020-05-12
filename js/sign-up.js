function signUp() {
    setup();
    if (
        document.querySelector(".login").value === "" ||
        document.querySelector(".password").value === "" ||
        document.querySelector(".first-name").value === "" ||
        document.querySelector(".last-name").value === "" ||
        document.querySelector(".pesel").value === "" ||
        document.querySelector(".address").value === "" ||
        document.querySelector(".phone-number").value === ""
    ) {
        error("Żadne z pól nie może być puste");
    } else if (document.querySelector(".pesel").value.length !== 11) {
        error("Pesel musi składać się z 11 znaków");
    } else if (document.querySelector(".phone-number").value.length !== 9) {
        error("Numer telefonu musi składać się z 11 znaków");
    } else {
        data.push({
            login: document.querySelector(".login").value,
            password: document.querySelector(".password").value,
            firstName: document.querySelector(".first-name").value,
            lastName: document.querySelector(".last-name").value,
            pesel: document.querySelector(".pesel").value,
            address: document.querySelector(".address").value,
            phoneNumber: document.querySelector(".phone-number").value,
            balance: document.querySelector(".balance").value || 0,
        });
        localStorage.setItem("data", JSON.stringify(data));
        loggedIndex = data.length - 1;
        localStorage.setItem("loggedIndex", JSON.stringify(loggedIndex));
        window.location.href = "my-account.html";
    }
}
