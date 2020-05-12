function transferMoney() {
    setup();
    if (document.querySelector(".input-name").value === "" || document.querySelector(".amount-of-money").value === "") {
        error("Pola nie mogą być puste");
    } else if (document.querySelector(".input-name").value === data[loggedIndex].firstName + " " + data[loggedIndex].lastName) {
        error("Wystąpił problem. Spróbuj ponownie póżniej.");
    } else if (document.querySelector(".amount-of-money").value > data[loggedIndex].balance) {
        error("Brak wystarczających środków na koncie");
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].firstName + " " + data[i].lastName === document.querySelector(".input-name").value) {
                data[loggedIndex].balance -= document.querySelector(".amount-of-money").value;
                data[i].balance += document.querySelector(".amount-of-money").value;

                localStorage.setItem("data", JSON.stringify(data));

                let h1 = document.createElement("h1");
                h1.innerHTML = "Przelew wysłany";

                document.querySelector(".page").innerHTML = "";
                return document.querySelector(".page").appendChild(h1);
            }
        }
        error("Nie znaleziono takiego użytkownika");
    }
}
