const userNameElement = document.querySelector('#userName');
const modal = document.querySelector('#cuerpo-consultar');
// const modalIngresar = document.querySelector('#IngresarModal');
// const formu = modalIngresar.querySelector('#Ingresar-Dinero');

const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent =  `¡Hola! ${userName}, escoje una opción a realizar`;
}

const saldo = localStorage.getItem('saldo');
if (saldo) {
    modal.textContent = `${saldo}`;
}

// formu.addEventListener('submit',e=>{
//     e.preventDefault();
//     console.log(e.target.cantidad.value)

// });