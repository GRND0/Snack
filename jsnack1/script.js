let primaParola = prompt ("inserire prima parola") ;
let secondaParola = prompt("inserire seconda parola") ;

if (primaParola.length === secondaParola.length) {
    console.log("stessa lunghezza");
}
else if (primaParola.length > secondaParola.length) {
    console.log(primaParola, secondaParola);
} else { console.log(secondaParola, primaParola);}