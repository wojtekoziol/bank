function focusOn(className) {
    document.querySelector("." + className).focus();
}

document.onkeydown = checkKey;
function checkKey(key) {
    if (key.keyCode === 13) {
        if (location.href.split("/").pop() === "sign-up.html") {
            signUp();
        } else if (location.href.split("/").pop() === "sign-in.html") {
            signIn();
        } else if (location.href.split("/").pop() === "change-data.html?" || location.href.split("/").pop() === "change-password.html?") {
            document.querySelector(".change-button").click();
        } else if (location.href.split("/").pop() === "transfer-money.html") {
            document.querySelector(".send-money-button").click();
        }
    }
}

function error(message) {
    document.querySelector(".error-message-container").innerHTML = "";
    let errorMessage = document.createElement("span");
    errorMessage.innerHTML = message;
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    document.querySelector(".error-message-container").appendChild(errorMessage);
}

function setup() {
    data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
        data = [];
    }
    loggedIndex = JSON.parse(localStorage.getItem("loggedIndex"));
    for (let i = 0; i < data.length; i++) {
        data[i].balance = parseInt(data[i].balance);
    }
    localStorage.setItem("data", JSON.stringify(data));
    data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
        data = [];
    }
}
