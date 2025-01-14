//ELEMENTO DI OUTPUT
const countdown = document.getElementById('countdown');

//Settare il cronometro
let secondi = 20;

//Settare il setInterval
const conteggio = setInterval(() => {
    if(secondi === 0){
        clearInterval(conteggio);
    } else {
        secondi = secondi - 1;
        countdown.innerHTML = secondi;
    }

}, 250);