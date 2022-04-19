let numeroUtente;

do {
    numeroUtente = prompt("Inserisci un numero di 4 cifre");
} while(numeroUtente.length !== 4)

let somma = 0 ;

for (let i = 0; i<numeroUtente.length; i++) {
    somma += parseInt(numeroUtente[i]);

} console.log(somma);