//Recupera la etiqueta con id #userName
const userNameElement = document.querySelector('#userName');
//Recupera el modal para mostrar el saldo
const modal = document.querySelector('#cuerpo-consultar');
//Recupera el modal para ingresar el saldo
const modalIngresar = document.querySelector('#cuerpo-ingresar');
const formuI = modalIngresar.querySelector('#formIngresar');
//Recupera el modal para retirar el saldo
const modalRetirar = document.querySelector('#cuerpo-retirar');
const formuR = modalRetirar.querySelector('#formRetirar');
//Asigna el valor del atributo nombre que se ha guardado en la sesion
const userName = localStorage.getItem('nombre');
if (userName) {
    //Se asigna el valor del atributo a la etiqueta
    userNameElement.textContent = `¡Hola! ${userName}, escoje una opción a realizar`;
}
//asigna el valor del atributo saldo que se ha guardado en la sesion
const saldo = localStorage.getItem('saldo');
const v = Number(saldo);//Se guarda el valor numerico
if (saldo) {
    //Asigna el valor del atributo a la etiqueta
    modal.textContent = `$${saldo} MXN`;
}
//Por med
formuI.addEventListener('submit', e => {
    e.preventDefault();
    const valorI = Number(e.target.cantidadI.value);
    //console.log(e.target.cantidad.value);
    // console.log(valorI);
    const resultado = v + valorI;
    // console.log(resultado);
    if (resultado < 990) {
        localStorage.setItem('saldo', resultado);
        window.location.reload();
        alert("saldo actual: "+localStorage.getItem('saldo'));
    } else {
        alert("No puede tener mas de $990MXN en su cuenta");
    }
});

formuR.addEventListener('submit', e => {
    e.preventDefault();
    const valorR = Number(e.target.cantidadR.value);
    //console.log(e.target.cantidad.value);
    // console.log(valorR);
    const resultado = v - valorR;
    // console.log(resultado);
    if (resultado > 10 && Math.sign(resultado)>0) {
        localStorage.setItem('saldo', resultado);
        e.preventDefault();
        window.location.reload();
        alert("saldo actual: "+localStorage.getItem('saldo'));
    } else {
        alert("No puede tener menos de $10MXN en su cuenta");
    }
});