// Inserisco un numero
const numberIndex = parseInt(prompt("Scrivi un numero"));
console.log("Numero inserito: " + numberIndex);

// Creo il valore del numero stampato
let numberFinal;

// Se il numero è dispari il numero scritto aumenta di 1

if (numberIndex % 2 == 0) {
  numberFinal = numberIndex;
} else {
  numberFinal = numberIndex + 1;
}

// Stampo il numero finale
console.log("Numero Stampato: " + numberFinal);
