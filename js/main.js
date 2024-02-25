//Seleccion de los botones de inicio y reiniciar//
const botonInicioParar = document.querySelector('#inicioParar');
const botonReiniciar = document.querySelector('#reiniciar');

//Declarar variables de tiempo//

let horas = 0;
let minutos = 0;
let segundos = 0;
let lapsoTiempo;
let estadoCronometro = 'detenido';



function aumentarCronometro() {
    segundos++;
    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;
        
        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    let segundosCeros = agregarCero(segundos);
    let minutosCeros = agregarCero(minutos);
    let horasCeros = agregarCero(horas);

    let cronometro = document.querySelector('#cronometro');
    cronometro.innerText = `${horasCeros}:${minutosCeros}:${segundosCeros}`;
}


function agregarCero(posicionTiempo) {
    return String('0' + posicionTiempo).slice(-2);
}
// Se usa String para volver el resultado de la concateacion
// una cadena, se concatena 0 con posiciconTiempo para que siempre haya un cero
//delante del numero//

//slice lo usamos para siempre obtener los ultimos dos caracteres
// resultante despues de agregar el 0 delante del numero//




function iniciarCrono() {
    if (estadoCronometro === 'detenido') {
        lapsoTiempo = setInterval(aumentarCronometro, 1000);
        estadoCronometro = 'avanzando';
        botonInicioParar.innerHTML = '<img src="images/stop.png">';
    } else {
        clearInterval(lapsoTiempo);
        estadoCronometro = 'detenido';
        botonInicioParar.innerHTML = '<img src="images/play.png">';
    }
}
//Se usa setInterval la cual toma dos argumentos (aumentarCrono, 1000)
//para iniciar un intervalo de tiempo que va
//a ejecutar la funcion aumentarCronometro, cada 1000 milisegundos
//lo cual equivale a 1 segundo//

botonInicioParar.addEventListener('click', iniciarCrono); 
//addEventListener esta atento a que el usuario haga click para iniciar el cronometro//




function reiniciarCrono() {
    clearInterval(lapsoTiempo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.querySelector('#cronometro').innerText = '00:00:00';
    estadoCronometro = 'detenido';
    botonInicioParar.innerHTML = '<img src="images/play.png">';
}
//clearInterval detiene la ejecucion de setInterval en este caso, su
//identificador era lapsoTiempo, al llamar clearInterval(lapsoTiempo) 
//se detiene la ejecucion de aumentarCronometro.

botonReiniciar.addEventListener('click', reiniciarCrono);

