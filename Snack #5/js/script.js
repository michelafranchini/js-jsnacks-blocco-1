// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// creare array vuoto
var arrayVuoto = [ ];

for (var i=0; i < 6; i++) {
    var numero = parseInt(prompt("inserisci un numero")); 
    console.log(numero);

    if (pariDispari(numero)) {
        arrayVuoto.push(numero); 
        console.log(arrayVuoto);
    }

}

function pariDispari (num) {
    return (num % 2 != 0); 
}



