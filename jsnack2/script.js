const numeriUtente = [] ;
for (let i = 0; i <= 6; i++) {
let numeroInserito = parseInt(prompt ("inserisci un numero")) ;
if (numeroInserito % 2 == 0) {
    numeriUtente.push(numeroInserito) ;
}
} console.log(numeriUtente);