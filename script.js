function validarEmail() {
    let email = document.querySelector('#email').value
    let erro = document.querySelector('.error-validation')
    let re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        erro.innerText = "por favor,insira um email válido"
    }
}
