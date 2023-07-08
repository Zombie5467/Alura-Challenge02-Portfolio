console.log('aquí')

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const cuadro = document.getElementById('cuadro');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};  

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const cuadroValue = cuadro.value.trim();

    

    if(nombreValue === '') {
        setError(nombre, 'Debes escribir tu nombre'); 
    } else {
        setSuccess(nombre);    
    }

    if(cuadroValue.length === 0) {
        setError(cuadro, 'Debe llenar este espacio');

    } else {
        setSuccess(cuadro);    
    }

    if(emailValue === '') {
        setError(email, 'Debe de escribir una dirección de correo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Por favor escriba una dirección de correo valida');
    } else {
        setSuccess(email);
    }
}
