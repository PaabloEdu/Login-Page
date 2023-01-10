const form = document.getElementById('form')
const username  = document.getElementById('username')
const password = document.getElementById('password')

//não recarregar a pagina quando for enviado o formulario
form.addEventListener("submit", (e) => {
    é.preventDefault();
});


function checkInputs() {
    const usernameValue = username.value
    const passwordValue = password .value


if (usernameValue == '') {
    setErrorFor(username, "O nome de usuárion é obrigatório.")
 }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
}

function setErrorFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}