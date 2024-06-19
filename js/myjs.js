// variabili dei contenitori dove inserire le foto
let contFotoPrincipale = document.querySelector('.contFoto');
let contFotoPiccole = document.querySelector('.contFotoPiccole');

// aggiunta bottoni in variabili
const bottIndietro = document.querySelector('.buttonIndietro');
const bottAvanti = document.querySelector('.buttonAvanti');

// variabili testo da inserire
let titoloFoto = document.getElementById('titleSuper');
let testoFoto = document.getElementById('testoSuper');


// array di oggetti dei supereroi
const images = [
    {
        'image': 'img/01.webp',
        'title': "Marvel's Spiderman Miles Morales",
        'text': 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        'descrizione': 'foto di Marvel\'s Spiderman Miles Morales',
    },
    {
        'image': 'img/02.webp',
        'title': 'Ratchet & Clank: Rift Apart',
        'text': 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        'descrizione': 'foto di Ratchet & Clank: Rift Apart',
    },
    {
        'image': 'img/03.webp',
        'title': 'Fortnite',
        'text': 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
        'descrizione': 'foto di Fortnite',
    },
    {
        'image': 'img/04.webp',
        'title': 'Stray',
        'text': 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
        'descrizione': 'foto di Stray',
    },
    {
        'image': 'img/05.webp',
        'title': "Marvel's Avengers",
        'text': "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        'descrizione': 'foto di Marvel\'s Avengers',
    }
];

// contatore per variare la dimensione delle foto laterali 
let numFoto = 0;

// ciclo per creare immagini da database e inserirle
// for (let i = 0; i < arrFoto.length; i++) {
//     // creazione di due nodi
//     let itemFoto = document.createElement('img');
//     let itemFoto2 = document.createElement('img');
//     // modifica src
//     itemFoto.src = arrFoto[i];
//     itemFoto2.src = itemFoto.src;
//     // modifica alt
//     itemFoto.alt = arrDescrizione[i];
//     itemFoto2.alt = itemFoto.alt;
//     // aggiunta della classe per gestire l'apparizione
//     itemFoto.classList.add('fotoPrincipale');
//     itemFoto2.classList.add('fotoPrincipale2');
//     // appendo i due nodi ai container
//     contFotoPrincipale.append(itemFoto);
//     contFotoPiccole.append(itemFoto2);
//     // contatore foto così da gestire le dimensioni, guarda sotto il for
//     numFoto++;
// }

// nuovo ciclo nel nuovo array di oggetti
images.forEach(superEroe =>{
    // creo le due immagine tag
    let card = document.createElement('img');
    let card2 = document.createElement('img');
    // le caratterizzo con classi immagine ecc
    card.classList.add("fotoPrincipale");
    card2.classList.add("fotoPrincipale2");
    card.src = superEroe.image;
    card2.src = superEroe.image;
    card.alt = superEroe.descrizione;
    card2.alt = superEroe.descrizione;
    
    // lo aggiungo al contenitore
    contFotoPrincipale.append(card);
    contFotoPiccole.append(card2)
    numFoto++
    
})

// creazione dinamica della dimensione foto laterale
let modificaNumFoto = document.documentElement.style.setProperty('--numFoto', numFoto);

// modifica visibilità prima foto
let fotoGrande = document.getElementsByClassName('fotoPrincipale');
let thumbanils = document.getElementsByClassName('fotoPrincipale2');
let contatore = 0;
fotoGrande[contatore].classList.add('active');
thumbanils[contatore].classList.add('active');
titoloFoto.textContent = images[contatore].title;
testoFoto.textContent = images[contatore].text;




// creazione evento per andare avanti
bottAvanti.addEventListener('click', (e) => {e.stopPropagation(); avanti();});

// creazione evento per andare indietro
bottIndietro.addEventListener('click', (e) => {e.stopPropagation(); indietro();});


function avanti(){
    console.log(contatore);
    if(contatore < images.length -1){
        fotoGrande[contatore].classList.remove('active');
        thumbanils[contatore].classList.remove('active');
        contatore++
        titoloFoto.textContent = images[contatore].title;
        testoFoto.textContent = images[contatore].text; 
        fotoGrande[contatore].classList.add('active');
        thumbanils[contatore].classList.add('active');
    }else{
        fotoGrande[contatore].classList.remove('active');
        thumbanils[contatore].classList.remove('active');
        contatore = 0;
        titoloFoto.textContent = images[contatore].title;
        testoFoto.textContent = images[contatore].text; 
        fotoGrande[contatore].classList.add('active');
        thumbanils[contatore].classList.add('active');
    }
    
};

function indietro(){
    if(contatore === 0){
        fotoGrande[contatore].classList.remove('active');
        thumbanils[contatore].classList.remove('active');
        contatore = images.length -1;
        titoloFoto.textContent = images[contatore].title;
        testoFoto.textContent = images[contatore].text; 
        fotoGrande[contatore].classList.add('active');
        thumbanils[contatore].classList.add('active');
    }else{
        fotoGrande[contatore].classList.remove('active');
        thumbanils[contatore].classList.remove('active');
        contatore--;
        titoloFoto.textContent = images[contatore].title;
        testoFoto.textContent = images[contatore].text; 
        fotoGrande[contatore].classList.add('active');
        thumbanils[contatore].classList.add('active');
    }
}