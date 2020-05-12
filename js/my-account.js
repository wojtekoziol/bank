function deleteAccount() {
    setup();
    for (let i = 0; i < data.length; i++) {
        data.splice(JSON.parse(localStorage.getItem("loggedIndex")), 1);
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.removeItem("loggedIndex");

        window.location.href = "log-out.html";
    }
}

(function () {
    setup();
    document.querySelector(".first-name").innerHTML = data[loggedIndex].firstName;
    document.querySelector(".last-name").innerHTML = data[loggedIndex].lastName;
    document.querySelector(".pesel").innerHTML = data[loggedIndex].pesel;
    document.querySelector(".address").innerHTML = data[loggedIndex].address;
    document.querySelector(".phone-number").innerHTML = data[loggedIndex].phoneNumber;
    document.querySelector(".balance").innerHTML = data[loggedIndex].balance;
})();
