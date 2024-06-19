let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let reverseButton = document.getElementById('reverse');


let clicked = false;
let startTime = setInterval(avanti, 3000);
let reverseTime;
if(!clicked){
    startTime
}

stopButton.addEventListener('click', () => {
    if(reverseTime){
        clearInterval(reverseTime);
        reverseButton = undefined;
    }else{
        clearInterval(startTime);
    }
    

});

reverseButton.addEventListener('click', () =>{
    clearInterval(startTime);
    reverseTime = setInterval(indietro, 3000);
})

// start.addEventListener('click', () =>{
    
//     if(!clicked){
//         clearInterval(startTime);
//         startTime
//         clicked = true;
//     }
// });


