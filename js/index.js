const accounts = [
    { nombre: "Mali", saldo: 200, password: "123456" },
    { nombre: "Gera", saldo: 290, password: "password" },
    { nombre: "Maui", saldo: 67, password: "abcdefg" },
    { nombre: "Hugo", saldo: 160, password: "daniela05" },
];

const form = document.querySelector('#loginForm');

form.addEventListener('submit', event => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
    if (form.checkValidity()) {
        if (validateCredentials(form)) {
            saveToLocalStorage(form);
            showLoaderAndRedirect({url: '/views/inicio.html'}); // Muestra el loader y redirige a la página de inicio
        } else {
            showAlert({ message: 'Usuario o contraseña incorrectos' });
        }
    } else {
        event.stopPropagation(); // retenemos el evento de validación
    }
});

function showLoaderAndRedirect({ url }) {
        form.submit(); // Envía el formulario si las info son válidas
        window.location.href = url; // Redirige a la página de inicio
    //}, 3000);
}


function validateCredentials({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    // Verifica si las credenciales coinciden con alguna cuenta del arreglo
    return accounts.some(acc => acc.nombre === user && acc.password === pass);
}

function saveToLocalStorage({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    const acc = accounts.find(acc => acc.nombre === user && acc.password === pass);

    // Guarda los valores en el almacenamiento local
    for (prop in acc) {
        localStorage.setItem(prop, acc[prop]);
    }
}


function showAlert({ message }) {
    alert(message);
}
