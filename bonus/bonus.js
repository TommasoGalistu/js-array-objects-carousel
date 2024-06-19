let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let reverseButton = document.getElementById('reverse');


let clicked = false;
let startTime = setInterval(avanti, 2000);
if(!clicked){
    startTime
}

stopButton.addEventListener('click', () => {
    clearInterval(startTime);
});

// start.addEventListener('click', () =>{
    
//     if(!clicked){
//         clearInterval(startTime);
//         startTime
//         clicked = true;
//     }
// });


