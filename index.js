function validateCep() {
    const inputCep = document.getElementById("input-cep");
    const cep = inputCep.value;
    console.log(cep)
    fetch("https://brasilapi.com.br/api/cep/v2/" + cep)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log("O nome da cidade é: " + json.city)
        });
}

function main() {
    const inputCep = document.getElementById("input-cep");
    inputCep.addEventListener("focusout", validateCep);
}

window.addEventListener("load", main);