let numeriDashboard = document.getElementById("numeri");
let timerDashboard = document.getElementById("timer");
let risultato =  document.getElementById("risultato");
let numCounter = document.getElementById("num-identified");
let randomNumContainer = document.getElementById("numeri-random-container");
let timerContainer = document.querySelector(".timer-container");

let numIdentified = [];


let randomNumArray = [];

let userInput;


console.log("numeri random" + randomNum());

timerDashboard.innerHTML = timer();

//funzione numeri automatici
function randomNum(){

    while(randomNumArray.length < 5){
        let random = Math.floor((Math.random() * 100) + 1);
        if (!randomNumArray.includes(random)) {
            //pusha il valore solo se non è presente nell'array
            randomNumArray.push(random);
            numeriDashboard.innerHTML = randomNumArray.join(' ');

          }
    }
    console.log(randomNumArray);

    return randomNumArray;
    
};

//funzione timer
function timer(){

    let clock;
    //inizializzazione variabile per contare il tempo
    let time = 30 + 1;

    //creazione timer con metodo setInterval
    clock = setInterval(
        function (){

            //Condizionalità con tempo scelto dinamicamente
            if(time === 0){

                // timerContainer.classList.add("inactive");
                // randomNumContainer.classList.add("inactive");
                clearInterval(clock);
                verificaNum();

                // risultato.classList.remove("inactive");
                // numCounter.classList.remove("inactive");



            }else{
                //Decrementa tempo
                time--;

                timerDashboard.innerHTML = time;
                console.log(time);
            }
        },
        1000
    );
}


function verificaNum(){
    for(let i = 0; i < 5; i++){
        userInput = parseInt(prompt("Inserisci qui i tuoi numeri, uno alla volta"));
    
        while(randomNumArray.includes(userInput)){
            let numResult = 0;
            const createNewDiv = generateElement("div");
            createNewDiv.classList.add("item-counter");
            // console.log("numero esatto nel while" + userInput++);
            createNewDiv.innerHTML = userInput++;
            risultato.append(createNewDiv);
            numResult++;

            numIdentified.push(numResult);
            numCounter.innerHTML = numIdentified.length;

        }
    }
}

//Funzione per creare nuovi elementi 
function generateElement(tagType){
    let newElement = document.createElement(tagType);
    return newElement;
}
