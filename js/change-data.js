function changeAccountInformation(type) {
    setup();
    document.querySelector(".page").innerHTML = "";
    let message;
    let inputType;
    switch (type) {
        case "firstName":
            message = "Podaj nowe imię";
            inputType = "text";
            break;
        case "lastName":
            message = "Podaj nowe nazwisko";
            inputType = "text";
            break;
        case "pesel":
            message = "Podaj nowy pesel";
            inputType = "number";
            break;
        case "address":
            message = "Podaj nowy adres zamieszkania";
            inputType = "text";
            break;
        case "phoneNumber":
            message = "Podaj nowy numer telefonu";
            inputType = "number";
            break;
    }
    let h1 = document.createElement("h1");
    h1.innerHTML = message;
    document.querySelector(".page").appendChild(h1);
    let input = document.createElement("input");
    input.className = "new-name";
    input.setAttribute("type", inputType);
    document.querySelector(".page").appendChild(input);
    let submit = document.createElement("input");
    submit.className = "change-button";
    submit.setAttribute("type", "submit");
    submit.value = "Zmień";
    submit.style.marginTop = "10px";
    document.querySelector(".page").appendChild(submit);
    let errorMessageContainer = document.createElement("div");
    errorMessageContainer.className = "error-message-container";
    document.querySelector(".page").appendChild(errorMessageContainer);
    submit.onclick = function () {
        if (document.querySelector(".new-name").value === "") {
            error("Pole nie może być puste");
        } else if (message === "Podaj nowy pesel" && document.querySelector(".new-name").value.length !== 11) {
            error("Pesel musi składać się z 11 znaków");
        } else if (message === "Podaj nowy numer telefonu" && document.querySelector(".new-name").value.length !== 9) {
            error("Numer telefonu musi składać się z 9 znaków");
        } else {
            data[loggedIndex][type] = document.querySelector(".new-name").value;
            localStorage.setItem("data", JSON.stringify(data));
            window.location.href = "my-account.html";
        }
    };
    document.querySelector(".new-name").focus();
}
