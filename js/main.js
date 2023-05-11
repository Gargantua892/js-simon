let randomNumArray = [];

// Invocazione funzione che genera 5 numeri casuali
randomNum();

// invocazione timer 30 secondi
timer(30);

//Inserimento valori dell'utente
let userArr = [];
userInput();

let arrIndex = 0;
console.log("arr index fuori dal loop " + arrIndex);

//aprire ticket perché il risultato dell'array inizia a contare dall'indice 1
while (userArr.includes(randomNumArray[arrIndex])){
    arrIndex++;
    // console.log("Hai indovinato " + arrIndex);

    if(userArr.includes(randomNumArray[arrIndex])){
        console.log(randomNumArray[arrIndex]);
    }
}





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


//funzione numeri automatici
function randomNum(){

    while(randomNumArray.length < 5){
        let random = Math.floor((Math.random() * 100) + 1);
        if (!randomNumArray.includes(random)) {
            //pusha il valore solo se non è presente nell'array
            randomNumArray.push(random);
          }
    }
    console.log(randomNumArray);

    return randomNumArray;
    
};


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

