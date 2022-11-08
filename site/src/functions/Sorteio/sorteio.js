const Thawan = require('prompt-sync')();

function Sorteio(){

    let nAleatorio = parseInt(Math.random() * 1000);
    
    for(let tentativa = 1; tentativa < 11; tentativa++){

        let numeroInfo = Number(Thawan());

        if(numeroInfo > nAleatorio){
            console.log('O Número é menor, Tentativa: ' + tentativa)    
        } 
        if(numeroInfo < nAleatorio){
            console.log('O Número é maior, Tentativa: ' + tentativa)  ;

        } 
        if(numeroInfo == nAleatorio) {
            console.log('Acertou!! EBA');
            break ;
        }

        if(tentativa == 10){
            console.log('Perdeu!! Inutil, o número era: ' + nAleatorio)
            break
        }   

    }

}

Sorteio()