const form = document.getElementById("form");
const nome = document.getElementById("nome");
const numero = document.getElementById("numero");
const email = document.getElementById("e-mail");
const mensagem = document.getElementById("mensagem");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const nomeValue = nome.value.trim();
    const numeroValue = numero.value.trim();
    const emailValue = email.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === '') {  
        errorValidation(nome, 'Preencha esse campo');
    } else {
        succesValidation(nome);
    }

    if(numeroValue === '') {
        errorValidation(numero, 'Preencha esse campo')
    } else {
        succesValidation(numero);
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        succesValidation(email);
    }

    if(mensagemValue === '') {
        errorValidation(mensagem, 'Preencha esse campo')
    } else {
        succesValidation(mensagem);
    }
};

function errorValidation(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    
    small.innerText = message

    formGroup.className = 'col-sm-9 error'
}

function succesValidation(input) {
    const formGroup = input.parentElement;

    formGroup.className = 'col-sm-9 sucess'
}