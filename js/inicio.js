const userNameElement = document.querySelector('#userName');
const modal = document.querySelector('#cuerpo-consultar');
const modalIngresar = document.querySelector('#cuerpo-ingresar');
const formuI = modalIngresar.querySelector('#formIngresar');
const modalRetirar = document.querySelector('#cuerpo-retirar');
const formuR = modalRetirar.querySelector('#formRetirar');

const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `¡Hola! ${userName}, escoje una opción a realizar`;
}

const saldo = localStorage.getItem('saldo');
const v = Number(saldo);
if (saldo) {
    modal.textContent = `$${saldo} MXN`;
}

formuI.addEventListener('submit', e => {
    e.preventDefault();
    const valorI = Number(e.target.cantidadI.value);
    //console.log(e.target.cantidad.value);
    console.log(valorI);
    const resultado = v + valorI;
    console.log(resultado);
    if (resultado < 990) {
        localStorage.setItem('saldo', resultado);
        window.location.reload();
    }else{
        
    }

});

formuR.addEventListener('submit', e => {
    e.preventDefault();
    const valorR = Number(e.target.cantidadR.value);
    //console.log(e.target.cantidad.value);
    console.log(valorR);
    const resultado = v - valorR;
    console.log(resultado);
    localStorage.setItem('saldo', resultado);
    window.location.reload();
});