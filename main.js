const form = document.getElementById('form');

function validaValor() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);

    if (valorA > valorB) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const validou = validaValor();

    const inputA = document.getElementById('valorA');
    const inputB = document.getElementById('valorB');
    inputA.value = '';
    inputB.value = '';

    if (validou) {
        const successmessage = document.getElementsByTagName('p')[0];
        successmessage.innerHTML = 'O valor de A é maior que o valor de B';
        successmessage.style.display = 'block';
        successmessage.classList.add('success');
        successmessage.classList.remove('error');
    } else {
        const errormessage = document.getElementsByTagName('p')[0];
        errormessage.innerHTML = 'O valor de A não é maior que o valor de B';
        errormessage.style.display = 'block';
        errormessage.classList.add('error');
        errormessage.classList.remove('success');
    }
});

const input01 = document.getElementById('valorA');
const input02 = document.getElementById('valorB');
const message = document.getElementsByTagName('p')[0];

input01.addEventListener('click', function (event) {
    message.style.display = 'none';
});

input02.addEventListener('click', function (event) {
    message.style.display = 'none';
});