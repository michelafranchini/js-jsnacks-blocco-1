// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// creare array nomi e cognomi

var cognomiLista = ["Rossi ", "Bianchi ", "Verdi ", "Gialli ", "Neri "]; 
console.log(cognomiLista);

var nomiLista = ["Michela ", "Antonio ", "Beatrice ", "Anna ", "Giuseppe "]; 
console.log(nomiLista);

for ( var i=0; i < 10; i++  ) {
    document.getElementById("lista_invitati").innerHTML += "<li> " + nomiCognomi(nomiLista, cognomiLista) + " </li>"; 
}

// funzione----
function nomiCognomi (nomi, cognomi) {
    var cognomiCasuale = cognomi[Math.floor(Math.random() * cognomi.length) ]; 
    var nomiCasuale = nomi[Math.floor(Math.random() * nomi.length) ];

    return nomiCasuale  + cognomiCasuale; 
}




