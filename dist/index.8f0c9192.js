// console.log('aquí')
//--------------------------------------------------------------
// AOS
AOS.init();
//--------------------------------------------------------------
// Formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const cuadro = document.getElementById("cuadro");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateInputs();
});
const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};
const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};
const isValidEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validateInputs = ()=>{
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const cuadroValue = cuadro.value.trim();
    if (nombreValue === "") setError(nombre, "Debes escribir tu nombre");
    else if (nombreValue.length > 50) setError(nombre, "M\xe1ximo 50 caracteres");
    else setSuccess(nombre);
    if (cuadroValue.length === 0) setError(cuadro, "Debe llenar este espacio");
    else if (cuadroValue.length > 600) setError(cuadro, "M\xe1ximo 600 caracteres");
    else setSuccess(cuadro);
    if (emailValue === "") setError(email, "Debe de escribir una direcci\xf3n de correo");
    else if (!isValidEmail(emailValue)) setError(email, "Por favor escriba una direcci\xf3n de correo valida");
    else setSuccess(email);
};

//# sourceMappingURL=index.8f0c9192.js.map
