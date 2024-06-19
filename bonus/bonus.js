let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let reverseButton = document.getElementById('reverse');


// funzionalità per far partire le foto in automatico
let startTime = setInterval(avanti, 3000);
let startEvent;
let reverseTime;


stopButton.addEventListener('click', () => {
    clearInterval(startTime);
    clearInterval(reverseTime);
    clearInterval(startEvent);

});

reverseButton.addEventListener('click', () =>{
    clearInterval(startTime);
    clearInterval(reverseTime);
    clearInterval(startEvent)
    reverseTime = setInterval(indietro, 3000);
})

start.addEventListener('click', () =>{
    if(startEvent){
        clearInterval(startEvent)
        console.log('piu di un click')
        console.log(startEvent)
    }
    clearInterval(startTime);
    clearInterval(reverseTime);
    startEvent = setInterval(avanti, 3000);
});


// funzionalità per cliccare sulle foto

contFotoPiccole.addEventListener('click', (event) =>{
    console.log(event.target)
})

