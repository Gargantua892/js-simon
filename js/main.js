let numeriDashboard = document.getElementById("numeri");
let timerDashboard = document.getElementById("timer");
let risultato =  document.getElementById("risultato");

let randomNumArray = [];

// Invocazione funzione che genera 5 numeri casuali
randomNum();



//Inserimento valori dell'utente
let userArr = [];
userInput();

let arrIndex = 0;

numeriDashboard.innerHTML = randomNumArray;
risultato.append(userArr);

//aprire ticket perché il risultato dell'array inizia a contare dall'indice 1
while (userArr.includes(randomNumArray[arrIndex])){

    // console.log("Hai indovinato " + arrIndex);

    if(userArr.includes(randomNumArray[arrIndex])){
        console.log(randomNumArray[arrIndex]);
    }
}

// invocazione timer 30 secondi
timer(30);




//funzione timer
function timer(customTime){

    let clock;
    //inizializzazione variabile per contare il tempo
    let time = 0;

    //creazione timer con metodo setInterval
    clock = setInterval(
        function (){

            //Condizionalità con tempo scelto dinamicamente
            if(time === customTime - 1){
                clearInterval(clock);
                console.log("fine");
            }else{
                //Incremento tempo
                time++;
                console.log(time);
            }
        },
        1000
    );
    return time;
}





//funzione inserimento numeri
function userInput(){
    for(let i = 0; i < 5; i++){
        userArr.push(parseInt(prompt("Inserisci qui i tuoi numeri, uno alla volta")));
    }
    console.log(userArr);
    return userArr;
}




// funzione delay

//prompt per inserire numeri

//cicli che tirano fuori numeri

