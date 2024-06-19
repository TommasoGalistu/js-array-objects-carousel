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
    // fermo la riproduzione delle foto
    clearInterval(startTime);
    clearInterval(reverseTime);
    clearInterval(startEvent);

    // disattivo tutte le card
    let arrayFoto = Array.from(thumbanils);
    arrayFoto.forEach((element) =>{
        if(element.classList.value !== 'fotoPrincipale2'){
            element.classList.remove('active')
        }
        
        
    });
    
    // attivo la carta con il click
    let cardAttiva = event.target;
    cardAttiva.classList.add('active');

    // disattivo la foto grande corrente
    fotoGrande[contatore].classList.remove('active');

    arrayFoto.forEach((element, index ) =>{
        // cerco la foto attiva e aggiorno tutta le foto e testi
        if(element.classList.value === 'fotoPrincipale2 active'){
            contatore = index;
            titoloFoto.textContent = images[contatore].title;
            testoFoto.textContent = images[contatore].text; 
            fotoGrande[contatore].classList.add('active');
            
        }
    })
})

