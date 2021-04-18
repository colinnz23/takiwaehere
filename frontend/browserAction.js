// browserAction.js contains browser actions

// reload when logo clicked
const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
    reload();
});

const reload = () => {
    location.reload();
}

